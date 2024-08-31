import React from 'react';
import s from './styles.module.scss';
import Button from '../ui/Button/Button';
import animation from '../../assets/images/3d_done.gif'
import ellipse from '../../assets/images/Ellipse2.png'
import ellipseBlue from '../../assets/images/Ellipse3.png'


function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={s['container']}>
      <div className={s['content']}>
      <img className={s['ellipse']} src={ellipse} />
      <img className={s['ellipse-two']} src={ellipseBlue} />
        <div className={s['flex']}>
          <h1 className={s['heading']}>Изменим ваше представление <br /> о сайтах</h1>
          <Button text='Оставить заявку' onClick={scrollToForm} />
        </div>
        <div className={s.heroSection__title}>
        <img className={s.heroSection__video} src={animation} alt="Animation" />

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
