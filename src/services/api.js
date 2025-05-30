const BASE_URL = "https://nusakueapi-219259508344.us-central1.run.app/";

export async function postPredictImage(file) {
  //   console.log(BASE_URL, file);

  const response = await fetch(`${BASE_URL}predict`, {
    method: "POST",
    body: file,
  });


  return await response.json();
}

export async function getTopPredictions() {
  const response = await fetch(`${BASE_URL}top-predictions`);

  return await response.json();
}
