import React from 'react';
import Button from './Button';
import ReactModal from 'react-modal'; //npm install react-modal

const GameOver = ({gameOver, setGameOver, newGame}) => {

const restartGame = () => {
    setGameOver(false);
    newGame();
    //TODO: reset score
}


    return (
        <ReactModal isOpen={gameOver}>
            <h1>Game Over!</h1>
            <Button content={<i>Restart</i>} handleClick={restartGame} title="Restart"/>
            <Button content={<i>Menu</i>} title="Menu"/> //TODO: nav to menu
        </ReactModal>
    );
}

export default GameOver;