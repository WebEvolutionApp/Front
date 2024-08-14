import s from './TeamSlider.module.scss';
import "slick-carousel/slick/slick.css";

import { teamArray } from './teamArray.data';

import Slider from "react-slick";

import { useEffect } from 'react';


function NextArrow({ onClick }) {
  return (
    <div
      className={s['next-arrow']}
      style={{ display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className={s['prev-arrow']}
      style={{ display: "block" }}
      onClick={onClick}
    />
  );
}

function TeamSlider({ onSlideChange }) {
  useEffect(() => {
    const sliderSlick = document.querySelector(".slick-slider");
    if (sliderSlick) sliderSlick.style.position = "static";
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: function (current, next) {
      onSlideChange(next);
    },
  };

  return (
    <div className={s['slider-container']}>
      <Slider {...settings}>
        {teamArray.map(slide => (
          <div key={slide.id} className={s['slide']}>
            <img src={slide.image} alt={slide.name} className={s['slide-image']} style={{ width: '9.5vw', height: '9vw' }} />
          </div>
        ))}
      </Slider >
    </div >
  );
}

export default TeamSlider;