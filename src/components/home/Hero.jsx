import HeroImg from "../../assets/home/desktop/image-hero.jpg";

function Hero() {
  return (
    <section
      className="text-[var(--text-light)] bg-[var(--bg-dark)] flex items-center 
    justify-center rounded-bl-xl rounded-br-xl overflow-hidden"
    >
      <div className="w-[80%] flex items-center justify-between">
        <div className="py-16 flex flex-col items-start gap-[2rem] z-10000 mr-[-30rem]">
          <p className="tracking-[1rem] uppercase text-[1.4rem] font-light opacity-[0.5]">
            New product
          </p>
          <h1 className="heading-primary">
            XX99 Mark II <span className="block">Headphones</span>
          </h1>
          <p className="font-light leading-[1.8] opacity-[0.75] tracking-[1px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a className="text-white bg-[var(--color-primary)] mt-8 btn">
            see product
          </a>
        </div>

        <div className="flex-shrink-0 w-full h-full">
          <img
            src={HeroImg}
            alt="hero image"
            className="w-full h-full object-cover mt-[-5rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
