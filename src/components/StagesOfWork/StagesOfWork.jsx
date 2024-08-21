import ProcessStep from '../ui/ProcessStep/ProcessStep';

import { arrayProcessStep } from './processStep.data';

import animation from '../../../public/images/steps-of-work-lines.mp4'
import title from '../../../public/images/stages-of-work.mp4';

import s from './StagesOfWork.module.scss';

import { useRef, useEffect } from 'react';

function StagesOfWork() {
  const videoStageAnimation = useRef(null);
  const videoStageTitle = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        (entry.isIntersecting) ? video.play() : video.pause();
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
    });

    if (videoStageAnimation.current) {
      observer.observe(videoStageAnimation.current);
      videoStageAnimation.current.addEventListener('ended', () => {
        videoStageAnimation.current.pause();
        videoStageAnimation.current.currentTime = videoStageAnimation.current.duration;
      });
    }

    if (videoStageTitle.current) {
      observer.observe(videoStageTitle.current);
      videoStageTitle.current.addEventListener('ended', () => {
        videoStageTitle.current.pause();
        videoStageTitle.current.currentTime = videoStageTitle.current.duration;
      });
    }

    return () => {
      if (videoStageAnimation.current) {
        observer.unobserve(videoStageAnimation.current);
        videoStageAnimation.current.removeEventListener('ended', () => { });
      }

      if (videoStageTitle.current) {
        observer.unobserve(videoStageTitle.current);
        videoStageTitle.current.removeEventListener('ended', () => { });
      }
    };
  }, []);

  return (
    <div className={s['container']}>
      <video
        ref={videoStageAnimation}
        className={s['stage-animation']}
        muted
        playsInline
      >
        <source src={animation} type='video/mp4' />
        Ваш браузер не поддерживает тег <code>video</code>.
      </video>

      <div className={s['content']}>
        <video
          ref={videoStageTitle}
          className={s['stage-title']}
          muted
          playsInline
        >
          <source src={title} type='video/mp4' />
          Ваш браузер не поддерживает тег <code>video</code>.
        </video>

        {arrayProcessStep.map(stage => (
          <div key={stage.id} className={s[`stage-work-${stage.class}`]}>
            <ProcessStep number={stage.number} className={s[`stage-step--${stage.class}`]} />
            <p className={s['stage-work__text']}>{stage.text}</p>
          </div>
        ))};
      </div>
    </div>
  );
}

export default StagesOfWork;