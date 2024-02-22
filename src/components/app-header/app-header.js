import HeaderMenu from '../header-menu/header-menu';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeaderStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={ AppHeaderStyles.header }>
      <nav className={ AppHeaderStyles.navBar }>
        <HeaderMenu />
        <a href='#0' className={ AppHeaderStyles.logo }>
          <Logo />
        </a>
        <a href='#0' className={ AppHeaderStyles.profileLink } >
          <ProfileIcon type={'secondary'} />
          <span className={AppHeaderStyles.profileLink__text}>Личный&nbsp;кабинет</span>
        </a>
      </nav> 
    </header>
  );
}

export default AppHeader;