import { shallowEqual } from "react-redux";
import { useState } from "react";
import { logout } from "../../services/actions/actions";
import { NavLink, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { useAppSelector } from "../../hooks/hooks";
import ProfileStyles from './profile.module.css';

function Profile() {

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((store) => ({user: store.user.user} as any), shallowEqual);

  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    password: '',
    isSuccess: false,
  });

  const handleLinkClick = () => {
    dispatch(logout(state, setState) as any);
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
            <NavLink to='/login' className={ProfileStyles.menuItem__link} onClick={handleLinkClick}>
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
