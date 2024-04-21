import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../services/actions/actions";
import { NavLink, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProfileStyles from './profile.module.css';

function Profile() {

  const dispatch = useDispatch();

  const { user } = useSelector(store => ({user: store.user.user}), shallowEqual);

  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    password: '',
    isSuccess: false,
  });

  const handleLinkClick = () => {
    dispatch(logout(state, setState));
  };

  return(
    <>
      { state.isSuccess && <Navigate to="/login" replace={true} /> }
      <div className={ProfileStyles.container}>
        <ul className={ProfileStyles.menu}>
          <li className={ProfileStyles.menuItem}>
            <NavLink to='/profile' end className={
                ({isActive}) => isActive ? `${ProfileStyles.menuItem__link} ${ProfileStyles.active}` : ProfileStyles.menuItem__link
              }>Профиль
            </NavLink>
          </li>
          <li className={ProfileStyles.menuItem}>
            <NavLink to='profile/user-orders' className={
              ({isActive}) => isActive ? `${ProfileStyles.menuItem__link} ${ProfileStyles.active}` : ProfileStyles.menuItem__link
              }>История заказов
            </NavLink>
          </li>
          <li className={ProfileStyles.menuItem}>
            <NavLink className={ProfileStyles.menuItem__link} onClick={handleLinkClick}>
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={ProfileStyles.supportText}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
        <Outlet />
      </div>
    </>
  )
};

export default Profile;
