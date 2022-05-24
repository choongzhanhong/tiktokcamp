import React from 'react';
import Button from './Button';
import ReactModal from 'react-modal'; //npm install react-modal

const GameOver = ({gameOver, word, goHome, newGame}) => {
    return (
        <ReactModal isOpen={gameOver} className="gameOverModal">
            <h1>Game Over!</h1>
            <p>The word is {word}! Wanna try again?</p>
            <div className='d-flex mt-3'>
                <div className="mr-auto p-1">
                    <Button icon={<i className="fa-solid fa-house"></i>} content={"Go Home"} handleClick={goHome} title="Home"></Button>
                </div>
                <div className='p-1'>
                    <Button icon={<i class="fa-solid fa-rotate-left"></i>} content={"Play Again"} handleClick={newGame} title="Play Again"></Button>
                </div>
            </div>
        </ReactModal>
    );
}

export default GameOver;