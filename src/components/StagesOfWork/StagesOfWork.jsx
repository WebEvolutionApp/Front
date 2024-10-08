import ProcessStep from '../ui/ProcessStep/ProcessStep';
import Video from '../ui/Video/Video';

import { arrayProcessStep } from './processStep.data';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useAnimationStages from '../../hooks/useAnimationStages';

import animation from '../../assets/images/steps-of-work-lines.webm'
import title from '../../assets/images/stages-of-work.mp4';

import s from './styles.module.scss';

import cn from 'classnames';
import lineFour from '../../assets/images/LineFour.png';
import lineSix from '../../assets/images/LineSix.png';
import lineOne from '../../assets/images/LineOne.png';


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
    <div id='stages' className={s['container']}>
        
      <Video
        ref={videoStageAnimation}
        className={s['stage-animation']}
        src={animation} />

      <div className={s['content']}>
      <img className={s['bg-line-one']} src={lineFour} alt="" />
      <img className={s['bg-line-two']} src={lineSix} alt="" />
      <img className={s['bg-line-three']} src={lineSix} alt="" />
      <img className={s['bg-line-four']} src={lineOne} alt="" />
      <img className={s['bg-line-five']} src={lineOne} alt="" />
          <div className={s['stage-title']}>
            Этапы работы <br /> с нами
          </div>

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