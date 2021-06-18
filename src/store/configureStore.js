import {createStore} from "redux";
import routesReducer from "./routesReducer";
import {devToolsEnhancer} from "redux-devtools-extension";

export function configureStore() {
    return createStore(routesReducer, devToolsEnhancer())
}
