import React from 'react';
import ToggleButton from 'react-toggle-button'; // npm install react-toggle-button

function KeyboardToggle ({keyboardSetting, setKeyboard}) {
    const newKeyboardSetting = keyboardSetting === 'classic' ? 'qwerty' : 'classic';

    const toggleKeyboard = () => {
        setKeyboard(newKeyboardSetting);
    };

    return (
        <div className='row'>
            <ToggleButton value={ keyboardSetting === 'qwerty' || false } onToggle={toggleKeyboard} />
            <div>&nbsp;QWERTY keyboard</div>
        </div>
    );
}

export default KeyboardToggle;