import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { calculateTotalPrice, handleFormatPrice } from "../../util/helper";

function Cart() {
  const { cartItems, updateItemQuantity } = useContext(DataContext);

  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <div>
      {cartItems.length === 0 && (
        <p className="mb-[3rem]" aria-live="polite">
          No items in cart!
        </p>
      )}

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
                    className={`font-bold w-full flex justify-between items-center gap-2 xxs:gap-[2rem]`}
                  >
                    <div>
                      <span className="block uppercase text-[1.3rem] min-[370px]:text-[1.5rem]">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </span>
                      <span className="block opacity-50 text-[1.2rem] xxs:text-[1.4rem]">
                        {handleFormatPrice(item.price)}
                      </span>
                    </div>

                    <div className="bg-[var(--bg-light)] h-[3.2rem] text-[1.3rem] font-bold flex items-center">
                      <button
                        className="btn-qty"
                        onClick={() => updateItemQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="xxs:w-[3.3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="btn-qty"
                        onClick={() => updateItemQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mb-[2.5rem]">
            <p className="summary">
              <span className="summary-text">total</span>
              <span className="summary-price">
                {handleFormatPrice(totalPrice)}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
