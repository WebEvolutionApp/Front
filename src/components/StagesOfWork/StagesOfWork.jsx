import ProcessStep from '../ui/ProcessStep/ProcessStep';
import Video from '../ui/Video/Video';

import { arrayProcessStep } from './processStep.data';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useAnimationStages from '../../hooks/useAnimationStages';

import animation from '../../../public/images/steps-of-work-lines.webm'
import title from '../../../public/images/stages-of-work.mp4';

import s from './StagesOfWork.module.scss';

import cn from 'classnames';


function StagesOfWork() {
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (video instanceof HTMLVideoElement) {
        entry.isIntersecting ? video.play() : video.pause();
      }
    });
  };

  const videoStageAnimation = useIntersectionObserver(handleIntersection, { threshold: 0.2 });
  const videoStageTitle = useIntersectionObserver(handleIntersection, { threshold: 0.5 });

  const animationStages = useAnimationStages(arrayProcessStep, 250);

  return (
    <div className={s['container']}>
      <Video
        ref={videoStageAnimation}
        className={s['stage-animation']}
        src={animation} />

      <div className={s['content']}>
        <Video
          ref={videoStageTitle}
          className={s['stage-title']}
          src={title} />

        {arrayProcessStep.map(stage => (
          <div
            key={stage.id}
            className={cn(s[`stage-work-${stage.class}`], {
              [s['stage-work--visible']]: animationStages.includes(stage.id)
            })}
          >
            <ProcessStep number={stage.number} className={s[`stage-step--${stage.class}`]} />
            <p className={s['stage-work__text']}>{stage.text}</p>
          </div>
        ))}
      </div>
    </div >
  );
}

export default StagesOfWork;