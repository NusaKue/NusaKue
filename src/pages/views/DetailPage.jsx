import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import ProductDetailHeaderSection from "../../components/Pages/Detail/ProductDetailHeaderSection";
import PreparationAndCulturalSignificanceSection from "../../components/Pages/Detail/PreparationAndCulturalSignificanceSection";
import UmkmSellerListSection from "../../components/Pages/Detail/UmkmSellerListSection";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function DetailPage() {
  const { id } = useParams();
  const { result, loading, error, refetch } = useApi(
    "cakes",
    "GET",
    null,
    id,
    null,
    !!id
  );
  const data = result?.data;
  console.log(data?.id);

  // if (loading || !result) {
  //   return (
  //     <div className="loading-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
  //       <DotLottieReact
  //         src="https://lottie.host/674c6c90-9815-4c01-a8fe-a809d2373d1a/VcJBJZNT0a.lottie"
  //         autoplay
  //         loop
  //         style={{ width: 300, height: 300 }}
  //       />
  //     </div>
  //   );
  // }
  return (
    <>
      <ProductDetailHeaderSection data={data} />
      <PreparationAndCulturalSignificanceSection
        cara_pembuatan={data?.cara_pembuatan}
        budaya={data?.budaya}
      />
      <UmkmSellerListSection id={data?.id}/>
    </>
  );
}

export default DetailPage;
