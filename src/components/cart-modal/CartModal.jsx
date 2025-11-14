import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { DataContext } from "../../context/DataContext";

import { handleBackdropClick } from "../../util/helper";

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();
  const { cartItems, clearCart } = useContext(DataContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => dialog.current.close(),
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="modal cart-modal overflow-hidden"
      onClick={(event) => handleBackdropClick(event, dialog)}
    >
      <div className="mb-[3rem] flex items-center justify-between">
        <h2 className="uppercase text-[1.8rem] font-bold tracking-wider ">
          {title}
        </h2>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="btnfont-medium opacity-50 border-none cursor-pointer 
          hover:text-[var(--color-primary)] transition-all duration-200 ease-in-out"
          >
            Remove all
          </button>
        )}
      </div>
      <div className="overflow-y-auto max-h-[56vh] pr-2">
        <Cart />
      </div>
      <form method="dialog">{actions}</form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
