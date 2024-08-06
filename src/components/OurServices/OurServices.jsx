import React from "react";
import s from "./styles.module.scss";
import ellipseOne from "../../assets/images/Ellipse1.1.png";
import ellipseTwo from "../../assets/images/Ellipse2.2.png";
import ellipseThree from "../../assets/images/Ellipse3.3.png";
import TextWindow from "../ui/TextWindow/TextWindow";

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
          <TextWindow
            windowText="Дизайн и разработка сайтов"
            customClassName={s.textWindow}
            width="31.5vw"
          />
          <TextWindow windowText="Приложения" 
          customClassName={s.textWindow} 
          width="31.5vw"
          />
          <TextWindow
            windowText="Порталы и сервисы"
            customClassName={s.textWindow}
            width="100%"
          />
          <TextWindow windowText="Логотипы" 
          customClassName={s.textWindow} 
          width="18.5vw"
          />
          <TextWindow
            windowText="SEO-продвижение"
            customClassName={s.textWindow}
            width="18.5vw"
          />
          <TextWindow windowText="Анимация" 
          customClassName={s.textWindow} 
          width="18.5vw"
          />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
