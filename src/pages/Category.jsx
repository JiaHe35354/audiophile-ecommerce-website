import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { DataContext } from "../context/DataContext";
import CategoryDisplay from "../components/shared/CategoryDisplay";
import About from "../components/shared/About";

function CategoryPage() {
  const { category } = useParams();
  const { products, loading, error } = useContext(DataContext);

  if (loading)
    return <p className="h-160 text-center mt-10">Loading products...</p>;

  if (error) {
    throw new Response(JSON.stringify({ message: error }), { status: 500 });
  }

  if (!products || products.length === 0) {
    return <p>Loading products data...</p>;
  }

  const filteredProducts = products
    .filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    )
    .reverse();

  if (filteredProducts.length === 0) {
    throw new Response(
      JSON.stringify({ message: `Category "${category}" not found` }),
      { status: 404 }
    );
  }

  return (
    <>
      <section>
        <h1
          className="h-80 sm:h-138 pt-40 bg-[var(--bg-dark)] text-[var(--text-light)] heading-secondary flex 
          justify-center items-center"
        >
          {filteredProducts[0].category}
        </h1>
        <div className="centered-container mt-26 sm:mt-54 tablet:mt-60 pb-20 flex flex-col gap-60">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="tablet:grid grid-cols-2 gap-x-20 lg:gap-x-32 gap-y-80 tablet:items-center"
            >
              <div
                className={`${
                  index % 2 !== 0 ? "order-2" : "order-1"
                } w-full h-full max-[640px]:mb-[3.2rem] max-[900px]:mb-[5.2rem] rounded-2xl overflow-hidden`}
              >
                <picture>
                  <source
                    srcset={product.categoryImage.desktop}
                    media="(min-width: 901px)"
                  />
                  <source
                    srcset={product.categoryImage.tablet}
                    media="(min-width: 31.25em)"
                  />
                  <img
                    src={product.categoryImage.mobile}
                    alt=""
                    className="w-full h-full"
                  />
                </picture>
              </div>

              <div
                className={`${
                  index % 2 !== 0 ? "order-1" : "order-2"
                } text-center max-[500px]:w-full max-[900px]:w-[80%] mx-auto `}
              >
                {product.new && (
                  <div className="text-[var(--color-primary)] uppercase text-[1.4rem] tracking-[1rem] mb-[1.8rem]">
                    new product
                  </div>
                )}
                <h2 className="heading-secondary mb-[3.5rem] ">
                  {product.name}
                </h2>
                <p className="opacity-60 leading-[1.7] mb-[3.8rem]">
                  {product.description}
                </p>
                <Link
                  to={`/${product.category}/${product.slug}`}
                  className="btn btn-primary"
                >
                  See product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CategoryDisplay />
      <About />
    </>
  );
}

export default CategoryPage;
