import cartReducer from "./reducers/cartReducer";
import {combineReducers} from "redux";

const routesReducer = combineReducers({
    cart: cartReducer,
});
export default routesReducer;
