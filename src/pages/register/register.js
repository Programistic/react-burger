import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import UserWindowWrapper from "../../components/user-window-wrapper/user-window-wrapper";
import AdditionalActions from "../../components/additional-actions/additional-actions";

function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleInputNameChange = () => {

  }

  const handleInputEmailChange = () => {
    
  }

  const handleInputPasswordChange = () => {
    
  }

  return(
    <>
      <UserWindowWrapper title={'Регистрация'} formName={'register-form'} onSubmit={handleSubmit}>
        <Input placeholder="Имя" type="text" value="" onChange={handleInputNameChange} />
        <Input placeholder="E-mail" type="email" value="" onChange={handleInputEmailChange} />
        <Input placeholder="Пароль" type="password" icon="ShowIcon" value="" onChange={handleInputPasswordChange} />
        <Button htmlType="submit" type="primary" size="medium">Зарегистрироваться</Button>
      </UserWindowWrapper>
      <AdditionalActions text={'Уже зарегистрированы?'} link={'/login'} linkText={'Войти'} />
    </>
  );
};

export default Register;
