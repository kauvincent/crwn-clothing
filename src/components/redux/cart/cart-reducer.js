import { cartActionTypes } from "./cart-types";
import { addItemsToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [] // ✅ use correct camelCase
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload) // ✅ fixed syntax
            };

        default:
            return state;
    }
};

export default cartReducer;
