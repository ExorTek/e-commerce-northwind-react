import {cartItems} from "../initialValues/cartItems";
import {ADD_TO_CART, REMOVE_FORM_CART} from "../actions/cartActions";

const initialStates = {
    cartItems: cartItems
}
export default function cartReducer(state = initialStates, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.productId === payload.productId);
            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {quantity: 1, product: payload}]
                }
            }

        case REMOVE_FORM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.productId !== payload.productId)
            }

        default:
            return state;
    }
}
