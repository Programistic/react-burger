import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../services/actions/actions";
import { useState, useEffect } from "react";

function ResetPassword() {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPassword(state, setState));
  };

  const [state, setState] = useState({
    password: '',
    token: '',
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
      state.isSuccess && navigate('/login');
      state.isError && navigate('/error');
    }, [state]
  );

  return(
    <>
      <UserWindowWrapper title={'Восстановление пароля'} formName={'reset-password-form'} onSubmit={handleSubmit}>
        <Input placeholder="Введите новый пароль" icon="ShowIcon" type="password" value={state.password} onChange={event => setState({...state, password: event.target.value})} />
        <Input placeholder="Введите код из письма" type="text" value={state.token} onChange={event => setState({...state, token: event.target.value})} />
        <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Вспомнили пароль?'} link={'/login'} linkText={'Войти'} />
    </>
  );
};

export default ResetPassword;
