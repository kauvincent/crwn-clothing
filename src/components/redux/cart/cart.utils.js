export const addItemsToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem){
        return cartItem.map(cartItem => cartItem.id === cartItemToAdd.id)
        ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    }

    return[...cartItem, {...cartItemToAdd, quantity:1}]

};
