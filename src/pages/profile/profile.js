import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import ProfileStyles from './profile.module.css';

function Profile() {

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleButtonCancelClick = () => {

  }

  return(
    <div className={ProfileStyles.container}>
      <ul className={ProfileStyles.menu}>
        <li className={ProfileStyles.menuItem}>
          <Link to='/profile' className={`${ProfileStyles.menuItem__link} ${ProfileStyles.menuItem__link_active}`}>Профиль</Link>
        </li>
        <li className={ProfileStyles.menuItem}>
          <Link to='/order-history' className={ProfileStyles.menuItem__link}>История заказов</Link>
        </li>
        <li className={ProfileStyles.menuItem}>
          <Link to='/' className={ProfileStyles.menuItem__link}>Выход</Link>
        </li>
      </ul>
      <p className={ProfileStyles.supportText}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
      <form className={ProfileStyles.form} name='profile-form' onSubmit={handleSubmit}>
        <Input placeholder="Имя" icon="EditIcon" />
        <Input placeholder="Логин" icon="EditIcon" />
        <Input placeholder="Пароль" icon="ShowIcon" />
        <div className={ProfileStyles.innerContainer}>
          <Button  htmlType="button" type="secondary" size="medium" onClick={handleButtonCancelClick}>Отмена</Button>
          <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
        </div>
      </form>
    </div>
  )
};

export default Profile;
