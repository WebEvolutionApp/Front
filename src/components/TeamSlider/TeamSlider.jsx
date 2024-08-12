import s from './TeamSlider.module.scss';
import "slick-carousel/slick/slick.css";

import { teamArray } from './teamArray.data';

import Slider from "react-slick";

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

function TeamSlider({ width, onSlideChange }) {
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
            <img src={slide.image} alt={slide.name} className={s['slide-image']} style={{ width: width }} />
          </div>
        ))}
      </Slider >
    </div >
  );
}

export default TeamSlider;