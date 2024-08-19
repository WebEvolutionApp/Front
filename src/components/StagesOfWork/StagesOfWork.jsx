import ProcessStep from '../ui/ProcessStep/ProcessStep';

import { arrayProcessStep } from './processStep.data';

import animation from '../../../public/images/steps-of-work-lines.mp4'
import title from '../../../public/images/stages-of-work.mp4';

import s from './StagesOfWork.module.scss';

function StagesOfWork() {
  return (
    <div className={s['container']}>
      <video
        className={s['stage-animation']}
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={animation} type='video/mp4' />
        Ваш браузер не поддерживает тег <code>video</code>.
      </video>

      <div className={s['content']}>
        <video
          className={s['stage-title']}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={title} type='video/mp4' />
          Ваш браузер не поддерживает тег <code>video</code>.
        </video>

        {arrayProcessStep.map(stage => (
          <div key={stage.id} className={s[`stage-work-${stage.class}`]}>
            <ProcessStep number={stage.number} className={s[`stage-step--${stage.class}`]} />
            <p className={s['stage-work__text']}>{stage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StagesOfWork;