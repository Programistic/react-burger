import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";

function ResetPassword() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return(
    <>
      <UserWindowWrapper title={'Восстановление пароля'} formName={'reset-password-form'} onSubmit={handleSubmit}>
        <Input placeholder="Введите новый пароль" icon="ShowIcon" />
        <Input placeholder="Введите код из письма" />
        <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Вспомнили пароль?'} link={'/login'} linkText={'Войти'} />
    </>
  );
};

export default ResetPassword;
