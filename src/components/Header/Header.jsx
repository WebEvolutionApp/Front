import s from './styles.module.scss';
import Links from '../ui/Links/Links';

import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';
import logo from '../../assets/icons/logo-web-evolution.svg';

function Header() {
  return (
    <div className={s['container']}>
      <div className={s['content']}>
        <a className={s['header-logo-link']} href="#"><img className={s['header-logo']} src={logo} alt="Logo Web Evolution" /></a>

        <Links menuStyle={s.headerNavbar__Menu} />

        <div className={s['header-socials']}>
          <a href="#"><img className={s['header-socials-img']} src={telegram} alt="Telegram" /></a>
          <a href="#"><img className={s['header-socials-img']} src={instagram} alt="Instagram" /></a>
        </div>

      </div>
    </div>
  );
}

export default Header;