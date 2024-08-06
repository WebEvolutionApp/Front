import React, { useState } from 'react';
import s from './styles.module.scss';
import TextWindow from '../ui/TextWindow/TextWindow';
import ellipseOne from '../../assets/images/Ellipse1.png';
import ellipseTwo from '../../assets/images/Ellipse2.png';
import ellipseThree from '../../assets/images/Ellipse3.png';
import lamp from '../../assets/images/light-bulb.png';

function ReasonsToWorkWithUs() {
  const [isSwinging, setIsSwinging] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  const handleClick = () => {
    setIsSwinging(true);
    setIsLightOn(!isLightOn); 
    setTimeout(() => {
      setIsSwinging(false);
    }, 1500);
  };

  return (
    <div className={s.reasonsToWorkWithUs__container}>
      <img className={s.reasonsToWorkWithUs__container__BgOne} src={ellipseOne} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgTwo} src={ellipseTwo} alt="" />
      <img className={s.reasonsToWorkWithUs__container__BgThree} src={ellipseThree} alt="" />
      <div className={s.reasonsToWorkWithUs__content}>
        <div className={s.reasonsToWorkWithUs__mainSection}>
          <div className={s.reasonsToWorkWithUs__mainSection__title}>Причины сотрудничать с нами</div>
          <div className={s.reasonsToWorkWithUs__mainSection__reasons}>
            <TextWindow
              customClassName={s.textWindow}
            > <div className={s.numberWindow}>1.</div>
                Имеем богатый опыт за спиной
                 </TextWindow>
                 <TextWindow
              customClassName={s.textWindow}
            > <div className={s.numberWindow}>2.</div>
                Профессионализм всех специалистов
                 </TextWindow>
                 <TextWindow
              customClassName={s.textWindow}
            > <div className={s.numberWindow}>3.</div>
                Находим креативный подход к каждому проекту
                 </TextWindow>
                 <TextWindow
              customClassName={s.textWindow}
            > <div className={s.numberWindow}>4.</div>
                Надежное сотрудничество,которое захочется повторить
                 </TextWindow>
          </div>
        </div>
        <div className={s.reasonsToWorkWithUs__animation}>
          <img
            src={lamp}
            alt="img"
            onClick={handleClick}
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
