import React from 'react';
import Button from './Button';
import ReactModal from 'react-modal'; //npm install react-modal

const GameOver = ({gameOver}) => {

    return (
        <ReactModal isOpen={gameOver}>
            <h1>Game Over!</h1>
            <Button content={<i>Restart</i>} handleClick={} title="Restart"/>
            <Button content={<i>Menu</i>} handleClick={} title="Menu"/>
        </ReactModal>
    );
}

export default GameOver;