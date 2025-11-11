import { Link } from "react-router-dom";

function RelatedProduct({ product }) {
  return (
    <div className="">
      <h2 className="product-heading-secondary text-center mb-15 sm:mb-[6.4rem]">
        You may also like
      </h2>
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-[1.1rem] lg:gap-[3rem]">
        {product.others.map((other) => (
          <figure
            key={other.slug}
            className="overflow-hidden flex flex-col items-center gap-[4rem]"
          >
            <picture>
              <source srcSet={other.image.desktop} media="(min-width: 64em)" />
              <source srcSet={other.image.tablet} media="(min-width: 40em)" />
              <img
                src={other.image.mobile}
                alt={other.name}
                className="rounded-2xl"
              />
            </picture>

            <figcaption className="flex flex-col items-center gap-[4rem]">
              <h3 className="text-[2.4rem] font-bold tracking-[1.71px]">
                {other.name}
              </h3>
              <Link
                to={`/${product.category}/${other.slug}`}
                className="btn btn-primary"
              >
                see product
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
