import React from 'react';
import ToggleButton from 'react-toggle-button'; // npm install react-toggle-button

function KeyboardToggle ({keyboardSetting, setKeyboard}) {
    const newKeyboardSetting = keyboardSetting === 'classic' ? 'qwerty' : 'classic';

    const toggleKeyboard = () => {
        setKeyboard(newKeyboardSetting);
    };

    return (
        <div className='row'>
            <div><i className="fa-solid fa-keyboard"></i> QWERTY keyboard&nbsp;</div>
            <ToggleButton value={ keyboardSetting === 'qwerty' || false } onToggle={toggleKeyboard} />
        </div>
    );
}

export default KeyboardToggle;