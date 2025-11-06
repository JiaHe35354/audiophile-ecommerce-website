import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { calculateTotalPrice, handleFormatPrice } from "../../util/helper";

function Cart({ button = false }) {
  const { cartItems, updateItemQuantity } = useContext(DataContext);

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
                    className={`font-bold w-full flex justify-between ${
                      button ? "items-center" : "items-start"
                    }  gap-[2rem]`}
                  >
                    <div>
                      <span className="block uppercase text-[1.5rem]">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </span>
                      <span className="block opacity-50 text-[1.4rem]">
                        {handleFormatPrice(item.price)}
                      </span>
                    </div>

                    {button ? (
                      <div className="bg-[var(--bg-light)] h-[3.2rem] text-[1.3rem] font-bold flex items-center">
                        <button
                          className="btn-qty"
                          onClick={() => updateItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="w-[3.3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="btn-qty"
                          onClick={() => updateItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <span className="text-[1.5rem] opacity-50 font-bold">{`x${item.quantity}`}</span>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          {button ? (
            <div className="mb-[3rem]">
              <p className="summary">
                <span className="summary-text">total</span>
                <span className="summary-price">
                  {handleFormatPrice(totalPrice)}
                </span>
              </p>
            </div>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
