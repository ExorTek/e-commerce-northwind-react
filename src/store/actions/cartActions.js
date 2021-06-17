export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FORM_CART = "REMOVE_FORM_CART";

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export function removeFromCart(product) {
    return {
        type: REMOVE_FORM_CART,
        payload: product
    }
}
