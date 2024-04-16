import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";
import { useState, useEffect } from "react";
import { recoverPassword } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    recoverPassword({state, setState});
  };

  const [state, setState] = useState({
    value: '',
    isError: false,
    error: '',
    isSuccess: false,
  });

  useEffect(() => {
      if (state.isSuccess) {
        navigate('/reset-password');
      }
      if (state.isError) {
        navigate('/page-not-found');
      }
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
