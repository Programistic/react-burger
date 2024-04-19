import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/actions/actions";
import { useState, useEffect } from "react";

function Login() {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(state, setState));
  };

  const [state, setState] = useState({
    email: '',
    password: '',
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
      state.isSuccess && navigate('/');
      state.isError && navigate('/error');
    }, [state]
  );

  return(
    <>
      <UserWindowWrapper title={'Вход'} formName={'login-form'} onSubmit={handleSubmit}>
        <Input placeholder="E-mail" type="email" value={state.email} onChange={event => setState({...state, email: event.target.value})} />
        <Input placeholder="Пароль" type="password" icon="ShowIcon" value={state.password} onChange={event => setState({...state, password: event.target.value})} />
        <Button htmlType="submit" type="primary" size="medium">Войти</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Вы - новый пользователь?'} link={'/register'} linkText={'Зарегистрироваться'} />
      <AdditionalActions text={'Забыли пароль?'} link={'/forgot-password'} linkText={'Восстановить пароль'} />
    </>
  );
};

export default Login;
