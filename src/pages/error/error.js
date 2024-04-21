import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetError } from "../../services/actions/error";
import ErrorPageStyles from './error.module.css';

function Error({errorStatus}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetError());
    navigate('/');
  };

  const handleError = (errorStatus) => {
    switch (errorStatus) {
      case 400:
        return 'Невалидный запрос к серверу!';
      case 401:
        return 'Ошибка авторизации!';
      case 403:
        return 'Ошибка регистации!';
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
      <h2 className={ErrorPageStyles.title}>{errorStatus}</h2>
      <p className={ErrorPageStyles.text}>{handleError(errorStatus)}</p>
      <Button  htmlType="button" type="secondary" size="medium" onClick={handleClick}>Назад</Button>
    </div>
  );
}

export default Error;
