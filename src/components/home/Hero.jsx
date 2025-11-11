import { Link } from "react-router-dom";
import HeroImgDesk from "/assets/home/desktop/image-hero.jpg";
import HeroImgTablet from "/assets/home/tablet/image-header.jpg";
import HeroImgMobile from "/assets/home/mobile/image-header.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <div
        className="z-50 max-w-[37.9rem] text-center lg:text-left flex flex-col items-center lg:items-start 
      gap-12"
      >
        <p className="tracking-[1rem] uppercase text-[1.4rem] font-light opacity-50">
          New product
        </p>
        <h1 className="heading-primary">
          XX99 Mark II <span className="block">Headphones</span>
        </h1>
        <p className="font-light leading-[1.8] opacity-75 tracking-[1px] mb-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          to="/headphones/xx99-mark-two-headphones"
          className="btn btn-primary"
        >
          see product
        </Link>
      </div>

      <div className="absolute -z-10 top-0 left-0 w-full h-full ">
        <picture className="block w-full h-full">
          <source srcSet={HeroImgDesk} media="(min-width: 64em)" />
          <source srcSet={HeroImgTablet} media="(min-width: 32.5em)" />
          <img
            src={HeroImgMobile}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-black/20 -z-1"></div>
    </section>
  );
}

export default Hero;
