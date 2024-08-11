import React from 'react';
import s from './styles.module.scss';

export const Links = ({ menuStyle }) => {
  const handleScroll = (event, targetId) => {
    event.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className={menuStyle}>
      <li className={s['nav-item']}>
        <a 
          className={s['nav-link']} 
          href="#stages" 
          onClick={(e) => handleScroll(e, 'stages')}
        >
          Этапы работы
        </a>
      </li>
      <li className={s['nav-item']}>
        <a 
          className={s['nav-link']} 
          href="#services" 
          onClick={(e) => handleScroll(e, 'services')}
        >
          Услуги
        </a>
      </li>
      <li className={s['nav-item']}>
        <a 
          className={s['nav-link']} 
          href="#about-us" 
          onClick={(e) => handleScroll(e, 'about-us')}
        >
          О нас
        </a>
      </li>
      <li className={s['nav-item']}>
        <a 
          className={s['nav-link']} 
          href="#form" 
          onClick={(e) => handleScroll(e, 'form')}
        >
          Контакты
        </a>
      </li>
    </ul>
  );
}

export default Links;
