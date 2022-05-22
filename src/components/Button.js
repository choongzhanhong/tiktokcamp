import React, { useState } from 'react';

const Button = ({content, handleClick}) => {
    return (
        <div className='button' onClick={handleClick}>
            {content}
        </div>
    );
}

export default Button;