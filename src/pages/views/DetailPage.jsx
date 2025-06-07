import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import ProductDetailHeaderSection from "../../components/Pages/Detail/ProductDetailHeaderSection";
import PreparationAndCulturalSignificanceSection from "../../components/Pages/Detail/PreparationAndCulturalSignificanceSection";
import UmkmSellerListSection from "../../components/Pages/Detail/UmkmSellerListSection";

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

  return (
    <>
      <ProductDetailHeaderSection data={data} error={error}/>
      <PreparationAndCulturalSignificanceSection
        cara_pembuatan={data?.cara_pembuatan}
        budaya={data?.budaya}
        error={error}
      />
      <UmkmSellerListSection id={data?.id} error={error}/>
    </>
  );
}

export default DetailPage;
