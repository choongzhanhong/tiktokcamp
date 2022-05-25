import React from 'react';

function Word ({word, correctLetters, gameStatus}) {
    return (
        <>
            <div className='word mb-3'>
                {word.split('').map((letter, i) => {
                    return (
                            <span className='letter' key={i}>
                                {(correctLetters.includes(letter) ? letter : '-')}
                            </span>
                    );
                })}
            </div>
            {gameStatus === 'win' &&
                    <>
                        <div>
                            YAY, you guessed the word correctly! <br></br>
                            Click <i className="fa-solid fa-forward"></i> to play again.
                        </div>
                    </>
                }
        </>
    );
}

export default Word;