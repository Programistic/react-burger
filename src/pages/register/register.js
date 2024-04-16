import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/actions";
import { useEffect, useState } from "react";

function Register() {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(state, setState));
  };

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
      state.isSuccess && navigate('/login');
      state.isError && navigate('/page-not-found');
    }, [state]
  );

  return(
    <>
      <UserWindowWrapper title={'Регистрация'} formName={'register-form'} onSubmit={handleSubmit}>
        <Input placeholder="Имя" type="text" value={state.name} onChange={event => setState({...state, name: event.target.value})} />
        <Input placeholder="E-mail" type="email" value={state.email} onChange={event => setState({...state, email: event.target.value})} />
        <Input placeholder="Пароль" type="password" icon="ShowIcon" value={state.password} onChange={event => setState({...state, password: event.target.value})} />
        <Button htmlType="submit" type="primary" size="medium">Зарегистрироваться</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Уже зарегистрированы?'} link={'/login'} linkText={'Войти'} />
    </>
  );
};

export default Register;
