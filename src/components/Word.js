import React from 'react';

function Word ({word, correctLetters}) {
    return (
        <div className='word mb-3'>
            {word.split('').map((letter, i) => {
                return (
                    <span className='letter' key={i}>
                        {(correctLetters.includes(letter) ? letter : '-')}
                    </span>
                )
            })}
        </div>
    );
}

export default Word;