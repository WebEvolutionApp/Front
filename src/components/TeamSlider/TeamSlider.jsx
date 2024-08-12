import s from './TeamSlider.module.scss';
import "slick-carousel/slick/slick.css";

import { teamArray } from './teamArray.data';

import Slider from "react-slick";

function TeamSlider({ width, onSlideChange }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: function (_, next) {
      onSlideChange(next);
    },
    afterChange: function (currentSlide) {
    }
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