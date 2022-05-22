import React, { useState, useEffect } from 'react';

function LetterKey ({isPlay, letter, selectedLetter, word, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters}) {
    const [classList, setClass] = useState("letterKey mt-2");

    useEffect(() => {
        setClass("letterKey mt-2")
    }, [word]);

    useEffect(() => {
        if (letter == selectedLetter) handleClick();
    }, [selectedLetter]);

    const handleClick = () => {
        if (isPlay) {
            if (word.includes(letter)) {
                setClass(currentClasses => currentClasses + " letterKey_down_correct scale-down-center");
                if (!correctLetters.includes(letter)) {
                    setCorrectLetters(currentLetters => [...currentLetters, letter]);
                }
            } else {
                setClass(currentClasses => currentClasses + " letterKey_down_wrong scale-down-center");
                if (!wrongLetters.includes(letter)) {
                    setWrongLetters(currentLetters => [...currentLetters, letter]);
                }
            }
        }
    };

    return (
        <div id={"letter_"+letter} className={"button " + classList} onClick={handleClick}>
            <div>{letter}</div>
        </div>
    );
}
  
export default LetterKey;