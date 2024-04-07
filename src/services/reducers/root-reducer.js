import { combineReducers } from "redux";
import { dataReducer } from "./all-ingredients";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { constructorReducer } from "./constructor-ingredients";
import { cardReducer } from "./current-ingredient";

export const rootReducer = combineReducers({
  data: dataReducer,
  order: orderReducer,
  modal: modalReducer,
  ingredients: constructorReducer,
  card: cardReducer,
});
