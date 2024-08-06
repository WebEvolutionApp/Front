import s from './HeroSection.module.scss';

import Button from '../ui/Button/Button';

function HeroSection() {
  return (
    <div className={s['container']}>
      <div className={s['content']}>
        <div className={s['flex']}>
          <h1 className={s['heading']}>Изменим ваше представление <br /> о сайтах</h1>
          <Button text='Оставить заявку' />
        </div>
        <img className={s['image']} src="./images/neon-abstract-shapes.svg" alt="Image" />
      </div>
    </div>
  );
}

export default HeroSection;