import TeamSlider from '../TeamSlider/TeamSlider';

import { useState, useMemo } from 'react';

import { teamArray } from '../../components/TeamSlider/teamArray.data';

import s from './OurTeam.module.scss';

function OurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = useMemo(() => teamArray[currentSlide], [currentSlide]);

  return (
    <div id='team' className={s['container']}>
      <div className={s['content']}>
          <TeamSlider
            onSlideChange={setCurrentSlide}
          />


        <div key={slide.id} className={s['info-team']}>
          <div className={s['img-block']}>
          <img src={slide.image} alt={slide.name} className={s['image-profile']} style={{ width: '25vw'}} />
          </div>
          <div className={s['info-block']}>
          <h2 className={s['info-team__name']}>{slide.name}</h2>
          <p className={s['info-team__text']}>{slide.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;