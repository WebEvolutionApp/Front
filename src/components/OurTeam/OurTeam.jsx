import TeamSlider from '../TeamSlider/TeamSlider';

import { useState, useMemo } from 'react';

import { teamArray } from '../TeamSlider/teamArray.data';

import s from './OurTeam.module.scss';

function OurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = useMemo(() => teamArray[currentSlide], [currentSlide]);

  return (
    <div id='team' className={s['container']}>
      <div className={s['content']}>

        <div className={s['flex']}>
          <h1 className={s['heading']}>Наша команда</h1>
          <TeamSlider
            width={'7.91vw'}
            onSlideChange={setCurrentSlide}
          />
        </div>

        <div key={slide.id} className={s['info-team']}>
          <img src={slide.image} alt={slide.name} className={s['image-profile']} style={{ width: '25vw', height: '25vw' }} />
          <h2 className={s['info-team__name']}>{slide.name}</h2>
          <p className={s['info-team__text']}>{slide.info}</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;