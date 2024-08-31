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
              &nbsp;Создание сайта
              
                {/* / составление структуры сайта
                / создание пользовательского интерфейса
                / создание дизайна сайта
                / верстка сайта
                / добавление администравной страницы
                / добавить */}
             
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp; Создание приложения
            {/*   / создание user flow
/ создание пользовательского интерфейса
/ создание дизайна приложения
/ вертска приложения на android или ios
/ добавить
/ добавить */}
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionTwo}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Разработка
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionThree}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Дизайн
             {/*  / айдентика
/ логотип
/ баннеры и постеры
/ дизайн упаковки
/ печатная продукция
/ инфографика */}
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;SEO-продвижение
              {/* / анализ конкурентов, сайта, выдачи
/ оптимизация сайта
/ наполнение сайта контентом
/ проведение SEO-аудита сайта */}
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Анимация
             
{/* / сайты и их элементы 
(логотипы, иконки и тд)
/ инфографика
/ кинетическая типографика
/ продуктовый ролик
/ создание и анимирование 
2д, 3д-персонажей */}

            </TextWindow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
