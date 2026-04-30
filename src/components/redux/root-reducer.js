import {combineReducers} from 'redux';
import UserReducer from './user/user-reducer';
import CartReducer from './cart/cart-reducer';
import { persistReducer } from "redux-persist";     
import storage from "redux-persist/lib/storage";  
import shopReducer from './shop/shop-reducer';  
import directoryReducer from './directory/directory-reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
};

export default persistReducer(persistConfig, combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
}));
