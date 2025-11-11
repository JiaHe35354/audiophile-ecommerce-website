function Gallery({ product }) {
  return (
    <div className="max-[640px]:mb-15 flex flex-col gap-8 sm:grid grid-cols-5 grid-rows-2 gap-y-8 gap-x-[1.8rem] lg:gap-x-12 lg:gap-y-[3.2rem]">
      <figure className="col-start-1 col-end-3 overflow-hidden">
        <picture>
          <source
            srcSet={product.gallery.first.desktop}
            media="(min-width: 56.3125em)"
          />
          <source
            srcSet={product.gallery.first.tablet}
            media="(min-width: 40em)"
          />
          <img
            src={product.gallery.first.mobile}
            alt="Gallery photo"
            className="block w-full h-full object-cover rounded-2xl"
          />
        </picture>
      </figure>
      <figure className="col-start-1 col-end-3 overflow-hidden">
        <picture>
          <source
            srcSet={product.gallery.second.desktop}
            media="(min-width:  56.3125em)"
          />
          <source
            srcSet={product.gallery.second.tablet}
            media="(min-width: 40em)"
          />
        </picture>
        <img
          src={product.gallery.second.desktop}
          className="block w-full h-full object-cover rounded-2xl"
          alt={`${product.name} image`}
        />
      </figure>
      <figure className="col-start-3 col-end-6 row-start-1 row-end-[-1] overflow-hidden">
        <picture>
          <source
            srcSet={product.gallery.third.desktop}
            media="(min-width:  56.3125em)"
          />
          <source
            srcSet={product.gallery.third.tablet}
            media="(min-width: 40em)"
          />
          <img
            src={product.gallery.third.mobile}
            alt="Gallery photo"
            className="block w-full h-full object-cover rounded-2xl"
          />
        </picture>
      </figure>
    </div>
  );
}

export default Gallery;
