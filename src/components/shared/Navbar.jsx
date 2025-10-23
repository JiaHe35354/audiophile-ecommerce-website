import BrandLogo from "../../assets/shared/desktop/logo.svg";
import CartLogo from "../../assets/shared/desktop/icon-cart.svg";

function Navbar() {
  return (
    <nav
      className="h-40 bg-[var(--bg-dark)] text-[var(--text-light)] flex flex-col items-center 
    justify-center rounded-tl-xl rounded-tr-xl"
    >
      <div className="relative w-[80%] flex justify-between items-center ">
        <a href="/">
          <img src={BrandLogo} alt="A brand logo" className="w-[140px]" />
        </a>

        <ul className="flex gap-[4rem] tracking-[2px] text-[1.3rem] font-semibold list-none">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">HEADPHONES</a>
          </li>
          <li>
            <a href="">SPEAKERS</a>
          </li>
          <li>
            <a href="">EARPHONES</a>
          </li>
        </ul>

        <a href="">
          <img src={CartLogo} alt="A cart logo" className="" />
        </a>
      </div>
      <div className="absolute top-40 w-[80%] h-[1px] bg-[#979797] opacity-[50%]"></div>
    </nav>
  );
}

export default Navbar;
