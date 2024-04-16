import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import NotFoundStyles from './not-found.module.css';

function NotFound() {

  const handleClick = () => {
    
  };

  return (
    <div className={NotFoundStyles.error}>
      <h2 className={NotFoundStyles.title}>404</h2>
      <p className={NotFoundStyles.text}>Страница не найдена</p>
      <Button  htmlType="button" type="secondary" size="medium" onClick={handleClick}>Назад</Button>
    </div>
  );
}

export default NotFound;
