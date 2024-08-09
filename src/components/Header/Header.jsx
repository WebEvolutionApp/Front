import s from './Header.module.scss';

function Header() {
  return (
    <div className={s['container']}>
      <div className={s['content']}>
        <a className={s['header-logo-link']} href="#"><img className={s['header-logo']} src="./icons/logo-web-evolution.svg" alt="Logo Web Evolution" /></a>

        <nav className={s['navbar']}>
          <ul className={s['nav-menu']}>
            <li className={s['nav-item']}><a className={s['nav-link']} href="#">Этапы работы</a></li>
            <li className={s['nav-item']}><a className={s['nav-link']} href="#">Услуги</a></li>
            <li className={s['nav-item']}><a className={s['nav-link']} href="#">О нас</a></li>
            <li className={s['nav-item']}><a className={s['nav-link']} href="#">Контакты</a></li>
          </ul>
        </nav>

        <div className={s['header-socials']}>
          <a href="#"><img className={s['header-socials-img']} src="./icons/telegram.svg" alt="Telegram" /></a>
          <a href="#"><img className={s['header-socials-img']} src="./icons/instagram.svg" alt="Instagram" /></a>
        </div>

      </div>
    </div>
  );
}

export default Header;