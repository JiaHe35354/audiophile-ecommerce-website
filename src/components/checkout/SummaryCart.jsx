import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { calculateTotalPrice, handleFormatPrice } from "../../util/helper";

function SummaryCart({ paymentMethod }) {
  const { cartItems } = useContext(DataContext);

  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <div>
      {cartItems.length === 0 && <p className="mb-[3rem]">No items in cart!</p>}

      {cartItems.length > 0 && (
        <>
          <ul className="mb-[3rem] flex flex-col gap-[2.4rem]">
            {cartItems.map((item) => (
              <li key={item.id}>
                <figure className="flex items-center gap-[1.6rem]">
                  <img
                    src={item.image}
                    alt="product image"
                    className="h-[6.4rem] w-[6.4rem] rounded-xl"
                  />

                  <figcaption
                    className={`font-bold w-full flex justify-between gap-2 xxs:gap-[2rem]`}
                  >
                    <div>
                      <span className="block uppercase text-[1.3rem] min-[370px]:text-[1.5rem]">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </span>
                      <span className="block opacity-50 text-[1.2rem] xxs:text-[1.4rem]">
                        {handleFormatPrice(item.price)}
                      </span>
                    </div>

                    <span className="text-[1.5rem] opacity-50 font-bold">{`x${item.quantity}`}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mb-[3rem] flex flex-col gap-3">
            <p className="summary">
              <span className="summary-text">total</span>
              <span className="summary-price">
                {handleFormatPrice(totalPrice)}
              </span>
            </p>
            <p className="summary">
              <span className="summary-text">Shipping</span>
              <span className="summary-price">{handleFormatPrice(50)}</span>
            </p>
            <p className="summary">
              <span className="summary-text">vat(included)</span>
              <span className="summary-price">
                {handleFormatPrice(totalPrice * 0.2)}
              </span>
            </p>
            <p className="summary mt-6">
              <span className="summary-text">grand total</span>
              <span className="summary-price text-[var(--color-primary)]">
                {handleFormatPrice(totalPrice + 50)}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SummaryCart;
