import HeaderMenu from '../header-menu/header-menu';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink } from 'react-router-dom';
import AppHeaderStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={AppHeaderStyles.header}>
      <nav className={AppHeaderStyles.navBar}>
        <HeaderMenu />
        <Link to={'/'} className={AppHeaderStyles.logo}>
          <Logo />
        </Link>
        <NavLink to={'/profile'} className={AppHeaderStyles.profileLink} >
          {({isActive}) => (
            <>
              <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
              <span className={isActive ? `${AppHeaderStyles.profileLinkText} ${AppHeaderStyles.active}` : AppHeaderStyles.profileLinkText}>Личный&nbsp;кабинет</span>
            </>
          )}
        </NavLink>
      </nav> 
    </header>
  );
}

export default AppHeader;
