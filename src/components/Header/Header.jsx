import s from './Header.module.scss';
import Links from '../ui/Links/Links';

function Header() {
  return (
    <div className={s['container']}>
      <div className={s['content']}>
        <a className={s['header-logo-link']} href="#"><img className={s['header-logo']} src="./icons/logo-web-evolution.svg" alt="Logo Web Evolution" /></a>

          <Links menuStyle={s.headerNavbar__Menu} /> 

        <div className={s['header-socials']}>
          <a href="#"><img className={s['header-socials-img']} src="./icons/telegram.svg" alt="Telegram" /></a>
          <a href="#"><img className={s['header-socials-img']} src="./icons/instagram.svg" alt="Instagram" /></a>
        </div>

      </div>
    </div>
  );
}

export default Header;