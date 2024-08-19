import s from './ProcessStep.module.scss';

function ProcessStep({ number, className }) {
  return (
    <div className={`${s['process-step']} ${className}`} >
      <span className={s['process-step__number']}>{number}</span>
    </div >
  );
}

export default ProcessStep;