import AboutImg from "../../assets/shared/desktop/image-best-gear.jpg";

function About() {
  return (
    <section className="mb-80">
      <div className="w-[80%] mx-auto grid  grid-cols-2 gap-16">
        <div className="pr-32 flex flex-col justify-center">
          <h2 className="heading-secondary mb-[3.2rem] ">
            Bringing you the{" "}
            <span className="block">
              <span className="text-[var(--color-primary)]">best</span> audio
              gear
            </span>
          </h2>
          <p className="opacity-60 leading-[1.7]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img
            src={AboutImg}
            alt="Man wearing xx99 mark I headphones"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
