export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(ticketToAdd) {
    return {
        type: ADD_TO_CART,
        ticketToAdd
    }
}