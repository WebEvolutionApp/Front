import s from './styles.module.scss';
import Links from '../ui/Links/Links';

function Footer() {
  return (
    <div className={s['container']}>
      <div className={s['content']}>
        <a className={s['header-logo-link']} href="#"><img className={s['header-logo']} src="./icons/logo-web-evolution.svg" alt="Logo Web Evolution" /></a>

        <nav className={s['navbar']}>
        <Links menuStyle={s.footerNavbar__Menu} />
        </nav>

        <div className={s['header-socials']}>
          <a href="#"><img className={s['header-socials-img']} src="./icons/telegram.svg" alt="Telegram" /></a>
          <a href="#"><img className={s['header-socials-img']} src="./icons/instagram.svg" alt="Instagram" /></a>
        </div>

      </div>
    </div>
  );
}

export default Footer;