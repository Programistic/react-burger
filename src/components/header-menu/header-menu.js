import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderMenuStyles from './header-menu.module.css';

function HeaderMenu() {
  return (
    <ul className={HeaderMenuStyles.menu}>
      <li className={HeaderMenuStyles.menuItem}>
        <a href='#0' className={HeaderMenuStyles.menuItem__link}>
          <BurgerIcon type={'primary'} />
          <span className={`${HeaderMenuStyles.menuItem__text} ${HeaderMenuStyles.isActiv}`}>Конструктор</span>
        </a>
      </li>
      <li className={HeaderMenuStyles.menuItem}>
        <a href='#0' className={HeaderMenuStyles.menuItem__link}>
          <ListIcon type={'secondary'} />
          <span className={HeaderMenuStyles.menuItem__text}>Лента&nbsp;заказов</span>
        </a>
      </li>
    </ul>
  );
}

export default HeaderMenu;
