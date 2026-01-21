import React from 'react';

import { toggleCartHidden } from '../redux/cart/cart-action';
import {connect} from 'redux';

import {ReactCompnents as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
)
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null, 
    mapDispatchToProps
)(CartIcon);
