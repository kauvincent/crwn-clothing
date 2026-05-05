import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51TTkqKP9BLl6kRRAdedjQLv5GAiJFMWGeCYoblVr7fyZk0HDrTZT9WUZnURYMGfBnjyQezGb4Qx0ERJTVesrN1UP00EI7AHBUY';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }       

    return (
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is : $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
