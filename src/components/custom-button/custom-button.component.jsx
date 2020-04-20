import React from 'react';
import './custom-button.styles.scss';


const CoustomButton = ({children,isGoogleSignIn,...otherProps}) =>{
    return(
        <div className={`${isGoogleSignIn? 'google':''} custom-button`} {...otherProps}>
                    {children}
        </div>
    )
}
export default CoustomButton;