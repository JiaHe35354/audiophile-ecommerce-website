import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import About from "../components/shared/About";
import CategoryDisplay from "../components/shared/CategoryDisplay";
import ProductInfo from "../components/product-details/ProductInfo";
import Gallery from "../components/product-details/Gallery";
import RelatedProduct from "../components/product-details/RelatedProduct";
import GoBack from "../components/shared/GoBack";

function ProductDetailPage() {
  const { productSlug } = useParams();
  const { products, loading, error } = useContext(DataContext);

  if (loading) return <p className="h-160 text-center">Loading products...</p>;

  if (error)
    throw new Response(JSON.stringify({ message: error }), { status: 500 });

  if (!products || products.length === 0) {
    return <p>Loading products data...</p>;
  }

  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    throw new Response(
      JSON.stringify({ message: `Product "${productSlug}" not found` }),
      { status: 404 }
    );
  }

  return (
    <section className="product-details pt-40">
      <div className=" relative w-[80%] mx-auto mb-60 flex flex-col gap-50">
        <GoBack top="30" />
        <ProductInfo product={product} />
        <Gallery product={product} />
        <RelatedProduct product={product} />
      </div>

      <CategoryDisplay />
      <About />
    </section>
  );
}

export default ProductDetailPage;
