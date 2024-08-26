import s from './styles.module.scss';
import arrowRight from '../../../assets/icons/arrow-right.svg'

function Button({ text, onClick }) {
  return (
    <button className={s['button']} onClick={onClick}>
      <p className={s['button-text']}>{text}</p>
      <img className={s['button__img']} src={arrowRight} alt="arrow right" />
    </button>
  );
}

export default Button;
