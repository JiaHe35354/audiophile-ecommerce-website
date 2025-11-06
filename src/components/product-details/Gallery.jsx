function Gallery({ product }) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-x-[3rem] gap-y-[3.2rem]">
      <figure className="col-start-1 col-end-3 overflow-hidden">
        <img
          src={product.gallery.first.desktop}
          className="block w-full h-full object-cover rounded-2xl"
          alt={`${product.name} image`}
        />
      </figure>
      <figure className="col-start-1 col-end-3 overflow-hidden">
        <img
          src={product.gallery.second.desktop}
          className="block w-full h-full object-cover rounded-2xl"
          alt={`${product.name} image`}
        />
      </figure>
      <figure className="col-start-3 col-end-6 row-start-1 row-end-[-1] overflow-hidden">
        <img
          src={product.gallery.third.desktop}
          className="block w-full h-full object-cover rounded-2xl"
          alt={`${product.name} image`}
        />
      </figure>
    </div>
  );
}

export default Gallery;
