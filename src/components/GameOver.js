import React from 'react';
import Button from './Button';
import ReactModal from 'react-modal'; //npm install react-modal
import { useNavigate } from "react-router-dom"

const GameOver = ({gameOver, word, newGame}) => {
    let navigate = useNavigate();
    return (
        <ReactModal isOpen={gameOver} className="gameOverModal">
            <div className="GameOverPage">
                <div className="GameOverTitle">Game Over!</div>
                <br></br>
                <div className="GameOverW">The word is {word}! Wanna try again?</div>
                <div className='d-flex mt-3'>
                    <div className="mr-auto p-1">
                        <Button icon={<i className="fa-solid fa-house"></i>} content={"Go Home"} handleClick={() => {navigate("/")}} title="Home"></Button>
                    </div>
                    <div className='p-1'>
                        <Button icon={<i class="fa-solid fa-rotate-left"></i>} content={"Play Again"} handleClick={newGame} title="Play Again"></Button>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default GameOver;