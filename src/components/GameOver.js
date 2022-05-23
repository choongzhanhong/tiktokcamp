import React from 'react';
import Button from './Button';
import ReactModal from 'react-modal'; //npm install react-modal

const GameOver = ({gameOver, giveHint, newGame}) => {
    return (
        <ReactModal isOpen={gameOver}>
            <h1>Game Over!</h1>
            <div className='d-flex mt-3'>
                <div className="mr-auto p-2">
                    <Button icon={<i className="fa-solid fa-house"></i>} content={"Home"} handleClick={newGame} title="Home"></Button>
                </div>
                <div className='p-2'>
                    <Button icon={<i class="fa-solid fa-rotate-left"></i>} content={"Restart"} handleClick={newGame} title="Restart"></Button>
                </div>
            </div>
        </ReactModal>
    );
}

export default GameOver;