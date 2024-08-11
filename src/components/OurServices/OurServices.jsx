import React, { useEffect, useRef } from "react";
import s from "./styles.module.scss";
import ellipseOne from "../../assets/images/Ellipse1.1.png";
import ellipseTwo from "../../assets/images/Ellipse2.2.png";
import ellipseThree from "../../assets/images/Ellipse3.3.png";
import TextWindow from "../ui/TextWindow/TextWindow";
import infinite from "../../assets/images/Infinite.png";
import title from '../../assets/images/neon-title.gif'

export function OurServices() {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add(s.typingActive);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div id="services" className={s.ourServices__container}>
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
      <div className={s.ourServices__content}>
        <div className={s.ourServices__title}> <img className={s.ourServices__titleImg} src={title} alt="" /></div>
        <div className={s.ourServices__mainSection}>
          <div className={s.ourServices__sectionOne}>
            <TextWindow customClassName={s.textWindow} width="31.5vw">
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Дизайн и разработка сайтов
            </TextWindow>
            <TextWindow customClassName={s.textWindow} width="31.5vw">
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Приложения
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionTwo}>
            <TextWindow customClassName={s.textWindow} width="100%">
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Порталы и сервисы
            </TextWindow>
          </div>
          <div className={s.ourServices__sectionThree}>
            <TextWindow customClassName={s.textWindow} width="18.5vw">
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;Логотипы
            </TextWindow>
            <TextWindow customClassName={s.textWindow} width="18.5vw">
              <img className={s.ourServices__logo} src={infinite} alt="icon" />
              &nbsp;SEO-продвижение
            </TextWindow>
            <TextWindow customClassName={s.textWindow} width="18.5vw">
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
