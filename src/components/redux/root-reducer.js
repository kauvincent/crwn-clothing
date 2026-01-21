import {combineReducer} from 'redux';
import UserReducer from './user/user-reducer';
import CartReducer from './cart/cart-reducer';

export default combineReducer({
    user: UserReducer,
    cart: CartReducer
});
