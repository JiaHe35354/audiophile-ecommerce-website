import { Link } from "react-router-dom";

function RelatedProduct({ product }) {
  return (
    <div className="">
      <h2 className="product-heading-secondary text-center mb-[6.4rem]">
        You may also like
      </h2>
      <div className="flex gap-[3rem]">
        {product.others.map((other) => (
          <figure
            key={other.slug}
            className="overflow-hidden flex flex-col items-center gap-[4rem]"
          >
            <img
              src={other.image.desktop}
              alt={`${other.name} image`}
              className="rounded-2xl"
            />
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
