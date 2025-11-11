import { Link } from "react-router-dom";

function NavLink() {
  return (
    <ul
      className="hidden tablet:flex gap-[4rem] tracking-[2px] text-[1.1rem] lg:text-[1.3rem] font-semibold 
      list-none [&_li]:hover:text-[var(--color-primary)] [&_li]:transition-colors [&_li]:duration-200 
      [&_li]:ease-in-out"
    >
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/headphones">HEADPHONES</Link>
      </li>
      <li>
        <Link to="/speakers">SPEAKERS</Link>
      </li>
      <li>
        <Link to="/earphones">EARPHONES</Link>
      </li>
    </ul>
  );
}

export default NavLink;
