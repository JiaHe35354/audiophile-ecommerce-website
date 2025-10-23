import HeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const categories = [
  { name: "headphones", img: HeadphonesImg },
  { name: "speakers", img: SpeakersImg },
  { name: "earphones", img: EarphonesImg },
];

function Categories() {
  return (
    <section className="mt-42 mb-30 py-32">
      <div className="w-[80%] mx-auto grid grid-cols-3 justify-items-center gap-12">
        {categories.map((cate) => (
          <div
            key={cate.name}
            className="relative bg-[var(--bg-light)] w-full h-[20.4rem] rounded-2xl"
          >
            <img
              src={cate.img}
              alt={`A ${cate.name} image`}
              className="w-[20rem] absolute -top-[6rem] left-1/2 transform -translate-x-1/2 bottom-[50%]"
            />

            <div className="uppercase absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <p className="text-[1.8rem] font-extrabold tracking-[1.29px] mb-5">
                {cate.name}
              </p>
              <a href="" className="flex items-center gap-4">
                <span className="text-[1.3rem] tracking-[1px] opacity-[60%] font-bold">
                  shop
                </span>
                <img src={ArrowRight} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
