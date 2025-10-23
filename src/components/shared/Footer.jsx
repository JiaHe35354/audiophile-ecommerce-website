import BrandLogo from "../../assets/shared/desktop/logo.svg";
import FacebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import TwitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import InstagramIcon from "../../assets/shared/desktop/icon-instagram.svg";

const icons = [
  { name: "Facebook", img: FacebookIcon },
  { name: "Twitter", img: TwitterIcon },
  { name: "Instagram", img: InstagramIcon },
];

function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] pt-32 pb-24">
      <div className="w-[80%] mx-auto text-[var(--text-light)]">
        <div className="mb-16 flex justify-between">
          <img src={BrandLogo} alt="brand logo" />
          <nav className="list-none">
            <ul className="uppercase flex gap-20 tracking-[2px] text-[1.3rem] font-semibold">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">headphones</a>
              </li>
              <li>
                <a href="">speakers</a>
              </li>
              <li>
                <a href="">earphones</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-2 items-center gap-x-42">
          <div className="opacity-50 text">
            <p className="leading-[1.7] mb-24">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved </p>
          </div>

          <div className="justify-self-end flex gap-8">
            {icons.map((icon) => (
              <img
                src={icon.img}
                alt={`${icon.name} icon`}
                className="w-[2.4rem] h-[2.4rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
