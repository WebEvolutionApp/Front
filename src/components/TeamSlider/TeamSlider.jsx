import s from './TeamSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrowUp from '../../../public/icons/next-arrow.svg';
import arrowDown from '../../../public/icons/prev-arrow.svg';

import { teamArray } from './teamArray.data';

import Slider from "react-slick";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${s['next-arrow']}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={arrowUp} alt="Next" className={s.arrowUp} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${s['prev-arrow']}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={arrowDown} alt="Prev" className={s.arrowDown} /></div>
  );
}

function TeamSlider({ onSlideChange }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
      if (onSlideChange) {
        onSlideChange(nextSlide);
      }
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <div className={s['slider-container']}>
      <Slider {...settings}>
        {teamArray.map(slide => (
          <div key={slide.id} className={s['slide']}>
            <img
              src={slide.image}
              alt={slide.name}
              className={s['slide-image']}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TeamSlider;
