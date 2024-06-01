import { Outlet } from "react-router-dom";
import InggredientsStyles from './ingredients.module.css';

function Ingredients() {

  return(
    <div className={InggredientsStyles.container}>
      <Outlet />
    </div>
  );
};

export default Ingredients;
