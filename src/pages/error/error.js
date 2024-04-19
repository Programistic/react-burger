import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import ErrorPageStyles from './error.module.css';

function Error({error}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const handleError = (error) => {
    switch (error) {
      case 400:
        return 'Невалидный запрос к серверу!';
      case 401 || 403:
        return 'Ошибка авторизации!';
      case 404:
        return 'Запрашиваемый ресурс не найден';
      case 409:
        return 'Ошибка во время регистрации! Возможно, такой пользователь уже существует.';
      default:
        return 'Неизвестная ошибка!'
    }
  };

  return (
    <div className={ErrorPageStyles.page}>
      <h2 className={ErrorPageStyles.title}>{error}</h2>
      <p className={ErrorPageStyles.text}>{handleError(error)}</p>
      <Button  htmlType="button" type="secondary" size="medium" onClick={handleClick}>Назад</Button>
    </div>
  );
}

export default Error;