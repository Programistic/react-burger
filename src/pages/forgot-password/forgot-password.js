import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";

function ForgotPassword() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleInputEmailChange = () => {

  }

  return(
    <>
      <UserWindowWrapper title={'Восстановление пароля'} formName={'forgot-password-form'} onSubmit={handleSubmit}>
        <Input placeholder="Укажите e-mail" type="email" value="" onChange={handleInputEmailChange} />
        <Button htmlType="submit" type="primary" size="medium">Восстановить</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Вспомнили пароль?'} link={'/login'} linkText={'Войти'} />
    </>
  );
};

export default ForgotPassword;
