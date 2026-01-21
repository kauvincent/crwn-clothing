import { cartActionTypes } from "./cart-types";
import { addItemsToCart } from "./cart.utils";
const INITIAL_STATE = {
    hidden: true,
    CartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
            hidden: !state.hidden
        }
            default:
        return state;

        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                CartItems: addItemsToCart(state.CartItemsaction.payload)
            }
    }
}

export default CartReducer;
