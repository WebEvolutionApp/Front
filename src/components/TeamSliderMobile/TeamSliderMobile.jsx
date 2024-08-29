import React, { useState } from 'react';
import s from './styles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { teamArray } from '../TeamSlider/teamArray.data';
import Slider from 'react-slick';
import arrowNext from '../../assets/icons/next-arrow-mob.svg';
import arrowPrev from '../../assets/icons/prev-arrow-mob.svg';

export function TeamSliderMobile({ onSlideChange }) {
    const [activeSlide, setActiveSlide] = useState(0);

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${s.nextArrow}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <img src={arrowNext} alt="Next" className={s.arrowNext} />
            </div>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${s.prevArrow}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <img src={arrowPrev} alt="Prev" className={s.arrowPrev} />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        verticalSwiping: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (currentSlide, nextSlide) => {
            setActiveSlide(nextSlide);
            if (onSlideChange) {
                onSlideChange(nextSlide);
            }
        },
    };

    return (
        <div className={s.sliderContainer}>
            <Slider {...settings}>
                {teamArray.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${s.slide} ${index === activeSlide ? s.active : ''}`}
                    >
                        <div className={s.slideName}>
                            {slide.name}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
    
}

export default TeamSliderMobile;
