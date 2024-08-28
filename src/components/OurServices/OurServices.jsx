import React, { useEffect, useRef } from "react";
import s from "./styles.module.scss";
import ellipseOne from "../../assets/images/Ellipse3.3.png";
import ellipseTwo from "../../assets/images/Ellipse2.2.png";
import ellipseThree from "../../assets/images/Ellipse3.3.png";
import ellipseFour from "../../assets/images/Ellipse2.png";
import TextWindow from "../ui/TextWindow/TextWindow";
import infinite from "../../assets/images/Infinite.png";
import lineFour from '../../assets/images/LineOne.png';
import lineSix from '../../assets/images/LineSix.png';


export function OurServices() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, { threshold: 0.5 });
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div id="services" className={s.ourServices__container}>
      <img className={s.ourServices__container__BgLineOne} src={lineFour} alt="" />
      <img className={s.ourServices__container__BgLineTwo} src={lineFour} alt="" />
      <img className={s.ourServices__container__BgLineThree} src={lineSix} alt="" />
      <img className={s.ourServices__container__BgLineFour} src={lineFour} alt="" />
      <img className={s.ourServices__container__BgLineFive} src={lineSix} alt="" />
      <img className={s.ourServices__container__BgLineSix} src={lineFour} alt="" />
      <img
        className={s.ourServices__container__BgOne}
        src={ellipseThree}
        alt=""
      />
      <img
        className={s.ourServices__container__BgTwo}
        src={ellipseTwo}
        alt=""
      />
      <img
        className={s.ourServices__container__BgThree}
        src={ellipseOne}
        alt=""
      />
      <img
        className={s.ourServices__container__BgFour}
        src={ellipseFour}
        alt=""
      />
      <div className={s.ourServices__content}>
        <div className={s.ourServices__title}>
       Наши <br /> услуги
        </div>
        <div className={s.ourServices__mainSection}>
          <div className={s.ourServices__sectionOne}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Дизайн и разработка сайтов
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Приложения
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionTwo}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Порталы и сервисы
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionThree}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Логотипы
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;SEO-продвижение
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Анимация
            </TextWindow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
