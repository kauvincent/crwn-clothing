import React from 'react';
import {connect} from 'redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-item'>
            {cartItems.map(cartItems => <CartItem key = {cartItems.id} item ={CartItem}/>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);
