import {cartItems} from "../initialValues/cartItems";
import {ADD_TO_CART} from "../actions/cartActions";

const initialStates = {
    cartItems: cartItems
}
export default function cartReducer(state = initialStates, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id);
            break;

        default:
            break;
    }
}
