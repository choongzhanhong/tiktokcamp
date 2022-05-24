import React from 'react';

const Button = ({icon, content, handleClick, title}) => {
    return (
        <div className='button' onClick={handleClick} title={title}>
            {icon && <span className="icon">{icon}</span>}{content}
        </div>
    );
}

export default Button;