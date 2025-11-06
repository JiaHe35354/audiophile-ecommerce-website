import AboutImgDesk from "../../assets/shared/desktop/image-best-gear.jpg";
import AboutImgTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import AboutImgMobile from "../../assets/shared/mobile/image-best-gear.jpg";

function About() {
  return (
    <section className="mb-42 tablet:mb-50 lg:mb-60 about-section">
      <div className="centered-container flex flex-col-reverse gap-20 tablet:grid grid-cols-2 tablet:gap-12">
        <div className="text-center tablet-padding tablet:pr-15 xl:pr-36 flex flex-col justify-center">
          <h2 className="heading-secondary mb-[3.2rem]">
            Bringing you the{" "}
            <span className="lg:block">
              <span className="text-[var(--color-primary)]">best</span> audio
              gear
            </span>
          </h2>
          <p className="opacity-50 leading-[1.7]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <picture>
            <source srcSet={AboutImgDesk} media="(min-width: 901px)" />
            <source srcSet={AboutImgTablet} media="(min-width: 640px)" />
            <img
              src={AboutImgMobile}
              loading="lazy"
              alt="Zx9 speaker image"
              className="w-full h-full block object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default About;
