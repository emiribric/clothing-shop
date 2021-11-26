import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IEsEqBu1WuJxY54A0dmbNGxKF9YSC89QJmo6fUEld9pckEfT2gpdHvrwPOIgw2ITfxiUz0GReJRViTHFHNj0efk00JMwtxmjT';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Shop'
            billingAddress
            shippingAddress
            image='https://image.freepik.com/free-vector/store-shop-icon-illustration_118339-425.jpg'
            description={`Your total is $${ price }`}
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
}

export default StripeCheckoutButton;