import React from 'react';
import s from './HeroSection.module.scss';
import Button from '../ui/Button/Button';
import img from '../../assets/images/3d_done.gif'
import title from '../../assets/images/change-your.gif'

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
        <div className={s['flex']}>
          <h1 className={s['heading']}>Изменим ваше представление <br /> о сайтах</h1>
          <Button text='Оставить заявку' onClick={scrollToForm} />
        </div>
        <img className={s['image']} src={img} alt="Image" />
      </div>
    </div>
  );
}

export default HeroSection;
