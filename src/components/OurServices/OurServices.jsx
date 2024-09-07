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
              <div className={s.textContent}>
    &nbsp; Создание сайта
  </div>
              <ul className={s.ourServices__list}>
                <li>/ составление структуры сайта</li>
                <li>/ создание дизайна сайта</li>
              <li>/ создание пользовательского интерфейса</li>
              <li>/ верстка сайта</li>
              <li>/ добавление администравной страницы</li>
              </ul>
             
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              <div className={s.textContent}>
    &nbsp; Создание приложения
  </div>
              <ul className={s.ourServices__list}>
                <li>/ создание user flow</li>
                <li>/ создание дизайна приложения</li>
                <li>/ создание пользовательского интерфейса</li>
                <li>/ вертска приложения на android или ios</li>
              </ul>
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionTwo}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              <div className={s.textContent}>
              &nbsp;Разработка
  </div>
              
              <ul className={s.ourServices__list}>
    <li>/ разработка серверной логики и API</li>
    <li>/ интеграция с платежными системами </li>
    <li>/ интеграция с серверной частью через API</li>
    <li>/ проектирование и настройка базы данных</li>
    <li>/ оптимизация производительности как на клиентской, так и на серверной стороне</li>
    <li>/ развертывание и поддержка на сервере и хостинге</li>
    <li>/ создание телеграм ботов </li>
<li>/ разработка Telegram Mini Aps </li>
<li>/ разработка систем управления контентом </li>
<li>/ разработка решений для интернет-магазинов</li>
<li>/ поддержка и техническое обслуживание</li>
  </ul>
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionThree}>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              <div className={s.textContent}>
              &nbsp;Дизайн
  </div>
      
              <ul className={s.ourServices__list}>
                <li>/ айдентика</li>
                <li>/ логотип</li>
                <li>/ баннеры и постеры</li>
                <li>/ дизайн упаковки</li>
                <li>/ печатная продукция</li>
                <li>/ инфографика </li>
                <li>/ прототипирование </li>
                <li>/ юзабилити-тестирование</li>
                <li>/ дизайн сайта/приложения </li>
                <li>/ дизайн адаптивов </li>
                



              </ul>
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              <div className={s.textContent}>
              &nbsp;SEO-продвижение
  </div>
              <ul className={s.ourServices__list}>
              <li>/ оптимизация сайта</li>
              <li>/ наполнение сайта контентом</li>
              <li>/ проведение SEO-аудита сайта</li>
                <li>/ анализ конкурентов, сайта, выдачи</li>
              
              </ul>
 
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              <div className={s.textContent}>
              &nbsp;Анимация
  </div>
              <ul className={s.ourServices__list}>
              <li>/ инфографика</li>
              <li>/ продуктовый ролик</li>
                <li> / сайты и их элементы 
                (логотипы, иконки и тд)</li>
                <li>/ кинетическая типографика</li>
                <li>/ создание и анимирование 2д, 3д-персонажей</li>
              </ul>

            </TextWindow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
