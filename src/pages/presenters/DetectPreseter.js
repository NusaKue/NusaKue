// import * as predictModel from "../../models/predictModel.js";

// export default class DetectPresenter {
//   constructor(view) {
//     this.view = view;
//   }

//   async detectImage(imageInput) {
//     try {
//       this.view.setLoading(true);
//       const result = await predictModel.predict(imageInput);
//       const getRecomended = await predictModel.getRecomended(id);
//       console.log("resut", result);
//       this.view.setResult(result);
//     } catch (error) {
//       this.view.setError(error.message || "Gagal mendeteksi gambar");
//       this.view.setResult(null);
//     } finally {
//       this.view.setLoading(false);
//     }
//   }
// }
