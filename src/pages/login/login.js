import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";

function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleInputEmailChange = () => {

  }

  const handleInputPasswordChange = () => {

  }

  return(
    <>
      <UserWindowWrapper title={'Вход'} formName={'login-form'} onSubmit={handleSubmit}>
        <Input placeholder="E-mail" type="email" value="" onChange={handleInputEmailChange} />
        <Input placeholder="Пароль" type="password" icon="ShowIcon" value="" onChange={handleInputPasswordChange} />
        <Button htmlType="submit" type="primary" size="medium">Войти</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Вы - новый пользователь?'} link={'/register'} linkText={'Зарегистрироваться'} />
      <AdditionalActions text={'Забыли пароль?'} link={'/forgot-password'} linkText={'Восстановить пароль'} />
    </>
  );
};

export default Login;
