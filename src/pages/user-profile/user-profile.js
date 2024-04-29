import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser } from "../../services/actions/actions";
import UserProfileStyles from './user-profile.module.css';

function UserProfile() {

  const dispatch = useDispatch();

  const { user } = useSelector(store => ({user: store.user.user}), shallowEqual);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(state, setState));
  };

  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    password: '',
    isSuccess: false,
  });

  const [visible , setVisible] = useState({isVisible: false});

  useEffect(() => {
      const isVisible = (state.name === user.name && state.email === user.email && state.password === '') ? false : true;
      setVisible({isVisible});
    }, [state]
  );

  const handleButtonCancelClick = () => {
    const oldName = user.name;
    const oldEmail = user.email;
    setState({...state, password: '', name: oldName, email: oldEmail});
  };

  return (
    <div className={UserProfileStyles.innerContainer}>
      <form className={UserProfileStyles.form} name='profile-form' onSubmit={handleSubmit}>
        <Input placeholder="Имя" type="text" icon="EditIcon" value={state.name} onChange={event => setState({...state, name: event.target.value})} />
        <Input placeholder="Логин" type="text" icon="EditIcon" value={state.email} onChange={event => setState({...state, email: event.target.value})} />
        <Input placeholder="Пароль" type="password" icon="EditIcon" value={state.password} onChange={event => setState({...state, password: event.target.value})} />
        { visible.isVisible &&
          <div className={UserProfileStyles.buttonContainer}>
            <Button  htmlType="button" type="secondary" size="medium" onClick={handleButtonCancelClick}>Отмена</Button>
            <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
          </div>
        }
      </form>
    </div>
  )
};

export default UserProfile;
