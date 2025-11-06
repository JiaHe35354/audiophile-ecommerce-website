import { handleFormatPrice } from "../../util/helper";

function SuccessItem({ item }) {
  return (
    <li key={item.id} className="py-4">
      <figure className="flex items-center gap-[1.6rem]">
        <img
          src={item.image}
          alt="product image"
          className="h-[5rem] w-[5rem] rounded-xl"
        />

        <figcaption
          className={"font-bold w-full flex justify-between gap-[2rem]"}
        >
          <div>
            <span className="block uppercase text-[1.5rem]">
              {item.name.split(" ").slice(0, -1).join(" ")}
            </span>
            <span className="block opacity-50 text-[1.4rem]">
              {handleFormatPrice(item.price)}
            </span>
          </div>

          <span className="opacity-50">{`x${item.quantity}`}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default SuccessItem;
