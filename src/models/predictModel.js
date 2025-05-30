import { postPredictImage } from "../services/api.js";
import { base64ToBlob } from "../utils/base64ToBlob.js";

export async function predict(fileOrBase64) {
  const file = new FormData();

  if (fileOrBase64 instanceof File || fileOrBase64 instanceof Blob) {
    file.append("image", fileOrBase64);
  } else if (typeof fileOrBase64 === "string" && fileOrBase64.startsWith("data:image")) {
    const blob = base64ToBlob(fileOrBase64);
    file.append("image", blob, "capture.jpg");
  } else {
    throw new Error("Input harus berupa File, Blob, atau base64 string");
  }
  
  return postPredictImage(file);
}
