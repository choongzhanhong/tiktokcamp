import React from 'react';
import LetterKey from './LetterKey';

function Keyboard ({isPlay, selectedLetter, word, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters}) {
    const keyboard_arr = [['Q','W','E','R','T','Y','U','I','O','P'],
                        ['A','S','D','F','G','H','J','K','L'],
                        ['Z','X','C','V','B','N','M']];

    return (
        <div>
            {keyboard_arr.map((row, i) => (
                <div className="keyboard_qwerty" key={"row"+i}>
                    {row.map(letter => (
                        <LetterKey key={letter} isPlay={isPlay} letter={letter} selectedLetter={selectedLetter} word={word} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;