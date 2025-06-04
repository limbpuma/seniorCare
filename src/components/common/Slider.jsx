import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";


const bannerSliderSettings = {
  modules: [Autoplay, FreeMode],
  spaceBetween: 30,
  slidesPerView: "auto",
  freeMode: true,
  loop: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
};

const imageCarouselSettings = {
  modules: [Autoplay, FreeMode, Navigation],
  spaceBetween: 40,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  freeMode: true,
  loop: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pause on hover for accessibility
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Vorheriges Bild',
    nextSlideMessage: 'Nächstes Bild',
    firstSlideMessage: 'Dies ist das erste Bild',
    lastSlideMessage: 'Dies ist das letzte Bild',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
};

const ReactSwiperSlider = ({
  slides,
  isImageSlider = false,
  divType = "flex-center",
  imgClass = "",
  iconClass = "",
  textClass = "",
  titleClass = "",
  wrapperClass = "",
}) => {
  const settings = isImageSlider ? imageCarouselSettings : bannerSliderSettings;

  const divTypes = {
    "flex-center": "flex items-center justify-center text-center p-4 gap-4",
    "flex-col": "flex flex-col text-center p-4",
    "flex-row": "flex items-center justify-start text-left p-4",
  };

  const selectedDivClass = divTypes[divType] || divTypes["flex-center"];
  return (
    <Swiper {...settings} role="region" aria-label="Bildergalerie">
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }} role="group" aria-label={`Bild ${index + 1} von ${slides.length}`}>
          <div className="relative">
            {slide.src && (
              <img loading="lazy"
                src={slide.src}
                className={`${imgClass} w-full h-[400px] object-cover`}
                alt={slide.alt || `Bild ${index + 1} aus der Galerie`}
              />
            )}
            <div className={`${selectedDivClass} ${wrapperClass}`}>
              {slide.icon && <i className={`${slide.icon} ${iconClass}`} aria-hidden="true"></i>}
              {slide.title && <h3 className={titleClass}>{slide.title}</h3>}
              {slide.text && <p className={textClass}>{slide.text}</p>}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReactSwiperSlider;
