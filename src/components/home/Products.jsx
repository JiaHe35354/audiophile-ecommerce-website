import SpeakerZ9Img from "../../assets/home/desktop/image-speaker-zx9.png";
import CirclePattern from "../../assets/home/desktop/pattern-circles.svg";
import SpeakerZ7Img from "../../assets/home/desktop/image-speaker-zx7.jpg";
import EarphonesYx1 from "../../assets/home/desktop/image-earphones-yx1.jpg";

function Products() {
  return (
    <section className="mb-80">
      <div className="w-[80%] mx-auto flex flex-col gap-18">
        <div className="relative h-[56rem] bg-[var(--color-primary)] -z-10 rounded-2xl overflow-hidden grid grid-cols-2">
          <img
            src={CirclePattern}
            alt="Background image"
            className="absolute -top-[8%] -left-[12%] -z-10"
          />
          <div className="w-[38rem] absolute top-[20%] left-[10%]">
            <img src={SpeakerZ9Img} alt="Zx9 speaker image" />
          </div>
          <div className="col-start-2 col-end-3 pt-[12rem] max-w-[35rem] text-[var(--text-light)] flex flex-col items-start gap-8">
            <h1 className="heading-primary">
              ZX9 <span className="block">speaker</span>
            </h1>
            <p className="opacity-[.75]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <a href="#" className="btn bg-[var(--text-dark)]">
              See product
            </a>
          </div>
        </div>

        <div className="w-full h-[full] rounded-2xl overflow-hidden relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 pl-48 ">
            <h3 className="heading-tertiary mb-20">ZX7 speaker</h3>
            <a href="#" className="btn border">
              See product
            </a>
          </div>
          <img
            src={SpeakerZ7Img}
            alt="Zx7 speaker image"
            className="w-full h-full -z-10"
          />
        </div>

        <div className="grid grid-cols-2 gap-16 ">
          <div className="h-full w-full rounded-2xl overflow-hidden">
            <img
              src={EarphonesYx1}
              alt="YX1 earphones image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[var(--bg-light)] pl-40 rounded-2xl flex flex-col justify-center items-start">
            <h3 className="heading-tertiary mb-20">YX1 Earphones</h3>
            <a href="#" className="btn border">
              See product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
