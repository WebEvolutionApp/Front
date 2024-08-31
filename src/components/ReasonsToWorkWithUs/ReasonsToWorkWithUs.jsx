import React, { useState, useRef } from 'react';
import s from './styles.module.scss';
import TextWindow from '../ui/TextWindow/TextWindow';
import ellipseOne from '../../assets/images/Ellipse1.png';
import ellipseTwo from '../../assets/images/Ellipse2.png';
import ellipseThree from '../../assets/images/Ellipse3.png';
import lampUpperPart from '../../assets/images/lamp-upper-part.png';
import lamp from '../../assets/images/lamp.png';
import lineOne from '../../assets/images/LineOne.png';
import lineTwo from '../../assets/images/LineTwo.png';
import lineThree from '../../assets/images/LineThree.png';
import lineFive from '../../assets/images/LineFive.png';

function ReasonsToWorkWithUs() {
  const [isSwinging, setIsSwinging] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const swingTimerRef = useRef(null);

  const handleClick = () => {
    if (isSwinging) {
      return;
    }

    setIsSwinging(true);

    if (isLightOn) {
      setIsLightOn(false);
      swingTimerRef.current = setTimeout(() => {
        setIsSwinging(false);
      }, 3000);
    } else {
      swingTimerRef.current = setTimeout(() => {
        setIsSwinging(false);
        setIsLightOn(true);
      }, 3000);
    }
  };

  return (
    <div className={s.reasonsToWorkWithUs__container}>
      <img className={s.reasonsToWorkWithUs__container__BgLineOne} src={lineOne} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgLineTwo} src={lineTwo} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgLineThree} src={lineThree} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgLineFive} src={lineFive} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgOne} src={ellipseOne} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgTwo} src={ellipseTwo} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgThree} src={ellipseThree} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgFour} src={ellipseTwo} alt="" />
      <div className={s.reasonsToWorkWithUs__content}>
        <div className={s.reasonsToWorkWithUs__mainSection}>
          <div className={s.reasonsToWorkWithUs__mainSection__title}>Причины сотрудничать с нами</div>
          <div className={s.reasonsToWorkWithUs__mainSection__reasons}>
            <TextWindow customClassName={s.textWindow}>
              <div className={s.numberWindow}>1.</div>
              Имеем богатый опыт за спиной
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <div className={s.numberWindow}>2.</div>
              Профессионализм всех специалистов
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <div className={s.numberWindow}>3.</div>
              Находим креативный подход к каждому проекту
            </TextWindow>
            <TextWindow customClassName={s.textWindow}>
              <div className={s.numberWindow}>4.</div>
              Надежное сотрудничество, которое захочется повторить
            </TextWindow>
          </div>
        </div>
        <div className={s.reasonsToWorkWithUs__animation}>
          <img src={lampUpperPart} className={s.lampUpperPart} alt="" />
          <img
            src={lamp}
            alt="img"
            onMouseEnter={handleClick}
            className={`${s.lamp} ${isSwinging ? s.swing : ''}`}
          />
          <img
            src={ellipseTwo}
            alt="light"
            className={`${s.light} ${isLightOn ? s.on : ''}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ReasonsToWorkWithUs;
