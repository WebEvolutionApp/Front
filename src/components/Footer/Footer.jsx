import s from './styles.module.scss';
import Header from '../Header/Header';

export function Footer() {
    return(
       <div className={s.footer__container}>
        <Header/>
       </div>
    )
}

export default Footer;