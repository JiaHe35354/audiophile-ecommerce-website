import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { DataContext } from "../../context/DataContext";
import { handleFormatPrice, calculateTotalPrice } from "../../util/helper";

import ConfirmIcon from "../../assets/checkout/icon-order-confirmation.svg";
import SuccessItem from "./SuccessItem";
import { useNavigate } from "react-router-dom";

const SuccessModal = forwardRef(function Modal({}, ref) {
  const [showAll, setShowAll] = useState(false);
  const dialog = useRef();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(DataContext);

  const totalPrice = calculateTotalPrice(cartItems);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
        clearCart();
      },
    };
  });

  function handleBackToHome() {
    localStorage.removeItem("orderCompleted");
    navigate("/");
    clearCart();
  }

  return createPortal(
    <dialog ref={dialog} className="modal success-modal ">
      <img
        src={ConfirmIcon}
        alt="Order confirmation icon"
        className="self-start"
      />
      <h1 className="text-[3.2rem] font-bold uppercase tracking-[1.14px] ">
        Thank you <span className="block">for your order</span>
      </h1>
      <p className="opacity-50 font-medium mb-4">
        You will receive an email confirmation shortly
      </p>
      <div className="w-full grid grid-cols-[60fr_45fr] rounded-2xl overflow-hidden">
        <div className="bg-[var(--bg-light)] px-10 py-8 flex flex-col items-center">
          <ul className="w-full pb-4 border-b border-[#979797]">
            {(showAll ? cartItems : cartItems.slice(0, 1)).map((item) => (
              <SuccessItem key={item.id} item={item} />
            ))}
          </ul>

          {cartItems.length > 1 ? (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-[1.2rem] opacity-50 font-bold pt-6 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200 ease-in-out"
            >
              {showAll
                ? "View less"
                : `and ${cartItems.length - 1} other item${
                    cartItems.length - 1 > 1 ? "s" : ""
                  }`}
            </button>
          ) : (
            <span className="text-[1.2rem] opacity-50 font-bold pt-6">
              1 item
            </span>
          )}
        </div>

        <div className="bg-black py-18 px-18 flex items-end">
          <p className="text-white">
            <span className="block opacity-50 uppercase mb-4">Grand total</span>
            <span className="text-[1.8rem]">
              {handleFormatPrice(totalPrice + 50)}
            </span>
          </p>
        </div>
      </div>

      <button
        className="btn btn-primary w-full mt-10"
        onClick={handleBackToHome}
      >
        back to home
      </button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default SuccessModal;
