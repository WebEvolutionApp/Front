import s from './Button.module.scss';

function Button({ text }) {
  return (
    <div className={s['button']}>
      <p className={s['button-text']}>{text}</p>
      <img src="./icons/arrow-right.svg" alt="arrow right" />
    </div>
  );
}

export default Button;