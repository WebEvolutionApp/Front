import React from "react";
import s from "./styles.module.scss";
import ellipseOne from "../../assets/images/Ellipse1.1.png";
import ellipseTwo from "../../assets/images/Ellipse2.2.png";
import ellipseThree from "../../assets/images/Ellipse3.3.png";
import TextWindow from "../ui/TextWindow/TextWindow";
import infinite from "../../assets/images/Infinite.png";

export function OurServices() {
  return (
    <div className={s.ourServices__container}>
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
        <div className={s.ourServices__title}>Наши услуги</div>
        <div className={s.ourServices__mainSection}>
          <TextWindow customClassName={s.textWindow} width="31.5vw">
            <img className={s.ourServices__logo} src={infinite} alt="icon" />
            &nbsp;Дизайн и разработка сайтов
          </TextWindow>
          <TextWindow customClassName={s.textWindow} width="31.5vw">
            <img className={s.ourServices__logo} src={infinite} alt="icon" />
            &nbsp;Приложения
          </TextWindow>
          <TextWindow customClassName={s.textWindow} width="100%">
            <img className={s.ourServices__logo} src={infinite} alt="icon" />
            &nbsp;Порталы и сервисы
          </TextWindow>
          <TextWindow customClassName={s.textWindow} width="18.5vw">
            <img className={s.ourServices__logo} src={infinite} alt="icon" />
            &nbsp;Логотипы
          </TextWindow>

          <TextWindow
            customClassName={s.textWindow}
            width="18.5vw"
          >
            <img className={s.ourServices__logo} src={infinite} alt="icon" />
            &nbsp;SEO-продвижение
            </TextWindow>
            <TextWindow
            customClassName={s.textWindow}
            width="18.5vw"
          >
            <img className={s.ourServices__logo} src={infinite} alt="icon" />
            &nbsp;Анимация
            </TextWindow>
          
           
        </div>
      </div>
    </div>
  );
}

export default OurServices;
