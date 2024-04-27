import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Options } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

const ImageCarousel = () => {
  const options: Options = {
    type: "loop",
    drag: "free",
    mediaQuery: "min",
    perPage: 2,
    gap: "2rem",
    breakpoints: {
      1024: {
        perPage: 3,
        gap: "3rem",
      },
    },
    arrows: false,
    pagination: false,
  };

  return (
    <Splide
      className="hover:cursor-grab active:cursor-grabbing"
      aria-label="My Favorite Images"
      options={options}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className="relative overflow-hidden bg-white dark:bg-pacamara-dark rotate-2 rounded-[15px]">
          <img
            src="/slide-1.jpg"
            width={800}
            alt=""
            className="object-cover image-shine h-[200px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative overflow-hidden bg-white dark:bg-pacamara-dark rotate-2 rounded-[15px]">
          <img
            src="/slide-2.jpg"
            width={800}
            alt=""
            className="object-cover image-shine h-[200px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative overflow-hidden bg-white dark:bg-pacamara-dark rotate-2 rounded-[15px]">
          <img
            src="/slide-3.jpg"
            width={800}
            alt=""
            className="object-cover image-shine h-[200px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative overflow-hidden bg-white dark:bg-pacamara-dark rotate-2 rounded-[15px]">
          <img
            src="/slide-4.jpg"
            width={800}
            alt=""
            className="object-cover image-shine h-[200px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative overflow-hidden bg-white dark:bg-pacamara-dark rotate-2 rounded-[15px]">
          <img
            src="/slide-5.jpg"
            width={800}
            alt=""
            className="object-cover image-shine h-[200px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default ImageCarousel;
