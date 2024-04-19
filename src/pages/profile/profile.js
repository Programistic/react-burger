import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser } from "../../services/actions/actions";
import { logout } from "../../services/actions/actions";
import { NavLink } from "react-router-dom";
import ProfileStyles from './profile.module.css';

function Profile() {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const { user } = useSelector(store => ({user: store.user.user}));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(state, setState));
  };

  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    password: '',
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
    state.isError && navigate('/error');
    }, [state]
  );

  const handleButtonCancelClick = () => {
    const oldName = user.name;
    const oldEmail = user.email;
    setState({name: oldName, email: oldEmail})
  };

  const handleLinkClick = () => {
    dispatch(logout(state, setState));
  };

  return(
    <div className={ProfileStyles.container}>
      <ul className={ProfileStyles.menu}>
        <li className={ProfileStyles.menuItem}>
          <NavLink to='/profile' className={
              ({isActive}) => isActive ? `${ProfileStyles.menuItem__link} ${ProfileStyles.active}` : ProfileStyles.menuItem__link
            }>Профиль
          </NavLink>
        </li>
        <li className={ProfileStyles.menuItem}>
          <NavLink to='/profile/orders' className={
            ({isActive}) => isActive ? `${ProfileStyles.menuItem__link} ${ProfileStyles.active}` : ProfileStyles.menuItem__link
            }>История заказов
          </NavLink>
        </li>
        <li className={ProfileStyles.menuItem}>
          <NavLink to='/' className={ProfileStyles.menuItem__link} onClick={handleLinkClick}>
            Выход
          </NavLink>
        </li>
      </ul>
      <p className={ProfileStyles.supportText}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
      <form className={ProfileStyles.form} name='profile-form' onSubmit={handleSubmit}>
        <Input placeholder="Имя" type="text" icon="EditIcon" value={state.name} onChange={event => setState({...state, name: event.target.value})} />
        <Input placeholder="Логин" type="text" icon="EditIcon" value={state.email} onChange={event => setState({...state, email: event.target.value})} />
        <Input placeholder="Пароль" type="password" icon="EditIcon" value={state.password} onChange={event => setState({...state, password: event.target.value})} />
        <div className={ProfileStyles.innerContainer}>
          <Button  htmlType="button" type="secondary" size="medium" onClick={handleButtonCancelClick}>Отмена</Button>
          <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
        </div>
      </form>
    </div>
  )
};

export default Profile;
