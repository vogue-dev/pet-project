import React from 'react';
import './Button.css'
import classNames from 'classnames'

const Button = ({ children, className, disabled, active, onClick }) => {
    
    const classes = classNames(
        `btn`,
        className,
        { active },
    );

    return (
        <button 
            className={classes} 
            onClick={onClick}
            disabled={disabled}
            >{children}
        </button>
    )
}

export default Button