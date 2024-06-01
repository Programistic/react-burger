import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import HeaderMenuStyles from './header-menu.module.css';

function HeaderMenu() {
  return (
    <ul className={HeaderMenuStyles.menu}>
      <li className={HeaderMenuStyles.menuItem}>
        <NavLink to={'/'} className={HeaderMenuStyles.menuItem__link}>
          {({isActive}) => (
            <>
              <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
              <span className={isActive ? `${HeaderMenuStyles.menuItem__text} ${HeaderMenuStyles.activ}` : HeaderMenuStyles.menuItem__text}>Конструктор</span>
            </>
          )}
        </NavLink>
      </li>
      <li className={HeaderMenuStyles.menuItem}>
        <NavLink to={'/feed'} className={HeaderMenuStyles.menuItem__link}>
          {({isActive}) => (
            <>
              <ListIcon type={isActive ? 'primary' : 'secondary'} />
              <span className={isActive ? `${HeaderMenuStyles.menuItem__text} ${HeaderMenuStyles.activ}` : HeaderMenuStyles.menuItem__text}>Лента&nbsp;заказов</span>
            </>
          )}
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;
