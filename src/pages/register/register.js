import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";

function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return(
    <>
      <UserWindowWrapper title={'Регистрация'} formName={'register-form'} onSubmit={handleSubmit}>
        <Input placeholder="Имя" />
        <Input placeholder="E-mail" />
        <Input placeholder="Пароль" icon="ShowIcon" />
        <Button htmlType="submit" type="primary" size="medium">Зарегистрироваться</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Уже зарегистрированы?'} link={'/signin'} linkText={'Войти'} />
    </>
  );
};

export default Register;
