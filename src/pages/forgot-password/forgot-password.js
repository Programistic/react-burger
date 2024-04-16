import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";
import { useState, useEffect } from "react";
import { recoverPassword } from "../../services/actions/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function ForgotPassword() {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(recoverPassword(state, setState));
  };

  const [state, setState] = useState({
    value: '',
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
      state.isSuccess && navigate('/reset-password');
      state.isError && navigate('/page-not-found');
    }, [state]
  );

  return(
    <>
      <UserWindowWrapper title={'Восстановление пароля'} formName={'forgot-password-form'} onSubmit={handleSubmit}>
        <Input placeholder="Укажите e-mail" type="email" value={state.value} onChange={event => setState({...state, value: event.target.value})} />
        <Button htmlType="submit" type="primary" size="medium">Восстановить</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Вспомнили пароль?'} link={'/login'} linkText={'Войти'} />
    </>
  );
};

export default ForgotPassword;
