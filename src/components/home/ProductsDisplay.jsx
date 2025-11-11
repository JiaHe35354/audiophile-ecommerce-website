import CirclePattern from "/assets/home/desktop/pattern-circles.svg";

import SpeakerZ9ImgDesk from "/assets/home/desktop/image-speaker-zx9.png";
import SpeakerZ9ImgTablet from "/assets/home/tablet/image-speaker-zx9.png";
import SpeakerZ9ImgMobile from "/assets/home/mobile/image-speaker-zx9.png";

import SpeakerZ7ImgDesk from "/assets/home/desktop/image-speaker-zx7.jpg";
import SpeakerZ7Tablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import SpeakerZ7ImgMobile from "/assets/home/mobile/image-speaker-zx7.jpg";

import EarphonesYx1Desk from "/assets/home/desktop/image-earphones-yx1.jpg";
import EarphonesYx1Tablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import EarphonesYx1Mobile from "/assets/home/mobile/image-earphones-yx1.jpg";

import { Link } from "react-router-dom";

function ProductsDisplay() {
  return (
    <section className="mb-42 tablet:mb-50 lg:mb-60 products-display-section">
      <div className="centered-container flex flex-col gap-10 lg:gap-18">
        <div
          className="relative h-[60rem] sm:h-[72rem] lg:h-[56rem] py-20 bg-[var(--color-primary)] 
          rounded-2xl grid lg:grid-cols-2 lg:items-center justify-end max-[1024px]:grid-rows-2 
          max-[1024px]:justify-items-center max-[1024px]:justify-center gap-10 overflow-hidden"
        >
          <img
            src={CirclePattern}
            alt="Background image"
            className="absolute -top-4 xs:-top-18 sm:-top-40 lg:scale-[1] lg:-left-50 lg:top-10 scale-[1.7] xs:scale-[1.5]"
          />

          <div className="scale-[0.7] xs:scale-[0.9] lg:scale-[0.45] lg:absolute lg:-left-30 xl:-left-15 lg:-top-38">
            <picture>
              <source srcSet={SpeakerZ9ImgDesk} media="(min-width: 1024px)" />
              <source srcSet={SpeakerZ9ImgTablet} media="(min-width: 768px)" />
              <img
                src={SpeakerZ9ImgMobile}
                loading="lazy"
                alt="Zx9 speaker image"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          <div
            className="z-50 sm:w-[34.9rem] lg:mt-30 lg:col-start-2 lg:justify-self-end xl:justify-self-center 
            lg:w-[35rem] px-10 text-[var(--text-light)] text-center lg:text-left flex flex-col items-center 
            lg:items-start gap-10"
          >
            <h1 className="heading-primary">
              ZX9 <span className="block">speaker</span>
            </h1>
            <p className="opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/speakers/zx9-speaker" className="btn btn-tertiary">
              See product
            </Link>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 pl-10 min-[500px]:pl-24 lg:pl-48">
            <h3 className="heading-tertiary mb-8 min-[370px]:mb-16 tablet:mb-20">
              ZX7 speaker
            </h3>
            <Link to="/speakers/zx7-speaker" className="btn btn-secondary">
              See product
            </Link>
          </div>

          <picture>
            <source srcSet={SpeakerZ7ImgDesk} media="(min-width: 901px)" />
            <source srcSet={SpeakerZ7Tablet} media="(min-width: 640px)" />
            <img
              src={SpeakerZ7ImgMobile}
              loading="lazy"
              alt="Zx9 speaker image"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        <div className=" flex flex-col sm:grid sm:grid-cols-2 gap-10 sm:gap-4 tablet:gap-12 ">
          <div className="rounded-2xl overflow-hidden">
            <picture>
              <source srcSet={EarphonesYx1Desk} media="(min-width: 901px)" />
              <source srcSet={EarphonesYx1Tablet} media="(min-width: 640px)" />
              <img
                src={EarphonesYx1Mobile}
                loading="lazy"
                alt="Zx9 speaker image"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="bg-[var(--bg-light)] px-10 py-20 sm:pl-15 lg:pl-35 rounded-2xl flex flex-col justify-center items-start">
            <h3 className="heading-tertiary mb-12 tablet:mb-20">
              YX1 Earphones
            </h3>
            <Link to="/earphones/yx1-earphones" className="btn btn-secondary">
              See product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsDisplay;
