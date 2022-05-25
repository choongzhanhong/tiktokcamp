import React from 'react';

const Button = ({icon, content, handleClick, title, triggerFlash}) => {
    return (
        <div className={'button' + (triggerFlash ? ' button_flash' : '' )} onClick={handleClick} title={title}>
            {icon && <span className="icon">{icon}</span>}{content}
        </div>
    );
}

export default Button;