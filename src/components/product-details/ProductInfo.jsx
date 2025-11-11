import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

function ProductInfo({ product }) {
  const { addItemToCart } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((prevQty) => Math.max(1, prevQty - 1));
  }

  function handleIncrease() {
    setQuantity((prevQty) => prevQty + 1);
  }

  return (
    <>
      <div className="min-[730px]:grid grid-cols-2 gap-x-28 lg:gap-x-12 xl:gap-x-32 items-center mt-60">
        <div className="max-[730px]:mb-10 w-full h-full rounded-2xl overflow-hidden">
          <picture>
            <source srcSet={product.image.desktop} media="(min-width: 64em)" />
            <source
              srcSet={product.image.tablet}
              media="(min-width: 45.625em)" // 730px
            />
            <img
              src={product.image.mobile}
              alt={product.name}
              className="w-auto h-full"
            />
          </picture>
        </div>

        <div>
          {product.new && (
            <div className="text-[var(--color-primary)] uppercase text-[1.4rem] tracking-[1rem] mb-10 ">
              new product
            </div>
          )}
          <h1 className="text-[2.8rem] lg:text-[4rem] font-bold uppercase tracking-[1.43px] leading-[1.2] mb-[3.5rem] ">
            {product.name}
          </h1>
          <p className="opacity-50 leading-[1.7] mb-[3rem]">
            {product.description}
          </p>
          <p className="text-[1.8rem] font-bold mb-[3rem] tracking-[1.29px]">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(product.price)}
          </p>

          <div className="h-[4.8rem] flex items-center gap-6">
            <div className="bg-[var(--bg-light)] text-[1.3rem] font-bold flex items-center">
              <button className="btn-qty" onClick={handleDecrease}>
                -
              </button>
              <span className="w-[5.6rem] text-center">{quantity}</span>
              <button className="btn-qty" onClick={handleIncrease}>
                +
              </button>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => addItemToCart(product.id, quantity)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-[5fr_3fr] gap-x-48">
        <div className="max-[640px]:mb-35 max-[1024px]:mb-40">
          <h2 className="product-heading-secondary">features</h2>
          {product.features.split("\n\n").map((paragraph, index) => (
            <p key={index} className="opacity-50 leading-[1.6] mb-8">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="max-[1024px]:flex max-[640px]:flex-col sm:gap-70">
          <h2 className="product-heading-secondary">In the box</h2>
          <ul className="sm:pt-3 flex flex-col gap-[0.8rem]">
            {product.includes.map((inc) => (
              <li key={inc.item}>
                <span className="inline-block w-[3.5rem] text-[var(--color-primary)] font-bold">{`${inc.quantity}x`}</span>{" "}
                <span className="opacity-50 font-medium">{inc.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
