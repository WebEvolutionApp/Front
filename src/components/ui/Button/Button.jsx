import s from './Button.module.scss';

function Button({ text, onClick }) {
  return (
    <button className={s['button']} onClick={onClick}>
      <p className={s['button-text']}>{text}</p>
      <img className={s['button__img']} src="./icons/arrow-right.svg" alt="arrow right" />
    </button>
  );
}

export default Button;
