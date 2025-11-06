import HeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const categories = [
  { name: "headphones", img: HeadphonesImg },
  { name: "speakers", img: SpeakersImg },
  { name: "earphones", img: EarphonesImg },
];

function CategoryDisplay() {
  return (
    <section className="mt-16 mb-18 sm:mt-32 tablet:mt-68 tablet:mb-34 py-28 category-display-section">
      <div
        className="centered-container  flex flex-col gap-[8rem] sm:grid 
        sm:grid-cols-3 sm:gap-[1rem] tablet:gap-[3rem]"
      >
        {categories.map((cate) => (
          <div
            key={cate.name}
            className="relative bg-[var(--bg-light)] w-full h-[16.5rem] tablet:h-[20.4rem] rounded-xl"
          >
            <img
              src={cate.img}
              alt={`A ${cate.name} image`}
              className="w-[16rem] tablet:w-[20rem] h-auto absolute -top-[6rem] left-1/2 transform 
              -translate-x-1/2"
            />

            <div
              className="uppercase absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col 
            items-center"
            >
              <p className="text-[1.5rem] tablet:text-[1.8rem] font-extrabold tracking-[1.29px] mb-5">
                {cate.name}
              </p>
              <Link to={`/${cate.name}`} className="flex items-center gap-4">
                <span
                  className="text-[1.3rem] tracking-[1px] opacity-[60%] font-bold 
                hover:text-[var(--color-primary)] transition-colors duration-200 ease-in-out"
                >
                  shop
                </span>
                <img src={ArrowRight} alt="right arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryDisplay;
