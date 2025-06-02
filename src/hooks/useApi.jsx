import { useState, useEffect, useCallback } from "react";
import { base64ToBlob } from "../utils/base64ToBlob";

const BASE_URL = "https://nusakueapi-219259508344.us-central1.run.app";

export function useApi(
  endpoint,
  method = "GET",
  body = null,
  id = null,
  imageData = null,
  enabled = true
) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    if (!enabled) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const doFetch = async () => {
      setLoading(true);
      setError(null);
      setResult(null);

      try {
        let url = `${BASE_URL}/${endpoint}`;
        if (id !== null && id !== undefined) {
          url += `/${id}`;
        }

        const options = {
          method: method.toUpperCase(),
          headers: {},
          signal,
        };

        if (imageData) {
          let formData = new FormData();

          if (imageData instanceof File || imageData instanceof Blob) {
            formData.append("image", imageData, "image.jpg");
          } else if (
            typeof imageData === "string" &&
            imageData.startsWith("data:image/")
          ) {
            const blob = base64ToBlob(imageData);
            formData.append("image", blob, "capture.jpg");
          } else {
            throw new Error(
              "imageData harus berupa File, Blob, atau base64 string"
            );
          }
          options.body = formData;
          // Jangan set Content-Type, biarkan browser yg handle
          delete options.headers["Content-Type"];
        } else if (
          body &&
          (method.toUpperCase() === "POST" || method.toUpperCase() === "PUT")
        ) {
          if (body instanceof FormData) {
            options.body = body;
            delete options.headers["Content-Type"];
          } else {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify(body);
          }
        }

        const response = await fetch(url, options);

        const contentType = response.headers.get("Content-Type") || "";

        let responseData = null;
        if (response.status !== 204 && contentType.includes("application/json")) {
          responseData = await response.json();
        }

        if (!response.ok) {
          setResult(responseData);
          setError({
            status: response.status,
            statusText: response.statusText,
            data: responseData,
          });
        } else {
          setResult(responseData);
          setError(null);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          // Request dibatalkan, jangan update state
          console.log("Fetch aborted");
        } else {
          setError(err);
          setResult(null);
        }
      } finally {
        setLoading(false);
      }
    };

    doFetch();

    // Cleanup function untuk cancel fetch saat unmount atau re-fetch
    return () => {
      controller.abort();
    };
  }, [endpoint, method, JSON.stringify(body), id, imageData, enabled]);

  useEffect(() => {
    const cleanup = fetchData();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }, [fetchData]);

  return { result, loading, error, refetch: fetchData };
}
