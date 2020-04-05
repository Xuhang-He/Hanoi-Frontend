import {
    ADD_TO_CART
} from './actions'

const initialState = {

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.ticketToAdd;
            const newItemId = newItem.itemId;
            const currentCartItems = Object.assign({}, state.cartItems);

            let updatedItem;
            if (currentCartItems.hasOwnProperty(newItemId)) {
                // The Id already exists. Aggregate the quantity and keep the other information untouched
                const oldItem = currentCartItems[newItemId];
                updatedItem = Object.assign(oldItem, {
                    quantity: parseInt(oldItem.quantity, 10) + parseInt(newItem.quantity, 10)
                });
            } else {
                // New item. Directly assign the item to this Id
                updatedItem = Object.assign({}, newItem);
            }

            currentCartItems[newItemId] = updatedItem;

            return Object.assign({}, state, {
                cartItems: currentCartItems
            });
        default:
            return state;
    }
};

export default rootReducer;