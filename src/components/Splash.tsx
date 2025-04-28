import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";
import SlideFour from "./slides/SlideFour";
import SlideFive from "./slides/SlideFive";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/bundle";
// @ts-ignore
import "swiper/css/effect-fade";

import LargeNavigation from "./LargeNavigation";

const Splash = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const slides = [
    <SlideOne
      activeIndex={activeIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <SlideTwo
      activeIndex={activeIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <SlideThree
      activeIndex={activeIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <SlideFour
      activeIndex={activeIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <SlideFive
      activeIndex={activeIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
  ];

  return (
    <div className=" max-w-[1280px] flex flex-col  text-black mx-auto w-full  xl:h-[1080px] ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={500}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        direction="horizontal"
        className="relative flex flex-col transition-all ease-in-out duration-500 w-full h-full "
        spaceBetween={50}
        autoplay={{ delay: 15000 }}
        watchSlidesProgress={true}
        allowTouchMove={true}
      >
        <LargeNavigation
          activeIndex={activeIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Splash;
