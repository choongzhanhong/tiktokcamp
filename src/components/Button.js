import React, { useState } from 'react';

const Button = ({content, handleClick, title}) => {
    return (
        <div className='button' onClick={handleClick} title={title}>
            {content}
        </div>
    );
}

export default Button;