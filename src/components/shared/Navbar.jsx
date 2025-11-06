import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MainNavLink from "./MainNavLink";
import HamburgerLogo from "../../assets/shared/tablet/icon-hamburger.svg";
import BrandLogo from "../../assets/shared/desktop/logo.svg";
import CartModal from "../cart-modal/CartModal";
import { DataContext } from "../../context/DataContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const modal = useRef();
  const navigate = useNavigate();
  const { cartItems } = useContext(DataContext);

  function handleOpenCart() {
    modal.current.open();
  }

  function handleGoToCheckout() {
    if (cartItems.length > 0) navigate("/checkout");
  }

  const cartQty = cartItems.length;

  let modalActions = <button className="btn btn-primary w-full">Close</button>;

  if (cartQty > 0) {
    modalActions = (
      <button className="btn btn-primary w-full" onClick={handleGoToCheckout}>
        Checkout
      </button>
    );
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <CartModal
        ref={modal}
        title={`cart (${cartQty})`}
        actions={modalActions}
      />
      <header>
        <nav
          className={`fixed top-0 left-0 w-full z-1000 transition-all duration-300 ${
            scrolled && "opacity-80"
          } bg-[var(--bg-dark)] text-[var(--text-light)] flex justify-center`}
        >
          <div className="nav-container centered-container">
            <button className="min-[901px]:hidden tablet-mr-16 cursor-pointer">
              <img src={HamburgerLogo} alt="" />
            </button>
            <Link to="/">
              <img src={BrandLogo} alt="A brand logo" />
            </Link>

            <MainNavLink />

            <button
              className="relative cursor-pointer tablet-ml-auto"
              onClick={handleOpenCart}
            >
              <svg
                width="23"
                height="20"
                className="w-full h-full fill-white hover:fill-[var(--color-primary)] transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                  fillRule="nonzero"
                />
              </svg>
              {cartQty > 0 && (
                <div className="absolute -top-6 -right-6 bg-[var(--color-primary)] text-[1.3rem] font-semibold h-8 w-8 rounded-full flex justify-center items-center">
                  {cartQty}
                </div>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
