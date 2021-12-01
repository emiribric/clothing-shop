import React from 'react';

import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

/*const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button type='button' className={`${inverted ? 'inverted' : 'google-sign-in'} custom-button `} { ...otherProps }>
        { children }
    </button>
);*/

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer { ...props }>
        { children }
    </CustomButtonContainer>
);

export default CustomButton;