import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import NotFoundStyles from './not-found.module.css';

function NotFound({error}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={NotFoundStyles.error}>
      <h2 className={NotFoundStyles.title}>{error || '000'}</h2>
      <p className={NotFoundStyles.text}>Страница не найдена</p>
      <Button  htmlType="button" type="secondary" size="medium" onClick={handleClick}>Назад</Button>
    </div>
  );
}

export default NotFound;
