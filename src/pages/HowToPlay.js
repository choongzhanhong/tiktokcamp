import React from 'react';
import '../MainMenu.css';
import { useNavigate } from "react-router-dom"
import Button from '../components/Button';

import instructions1 from '../images/instructions1.PNG';
import instructions2 from '../images/instructions2.PNG';
import instructions3 from '../images/instructions3.PNG';
import instructions4 from '../images/instructions4.PNG';
import instructions5 from '../images/instructions5.PNG';

function HowToPlay() {
	let navigate = useNavigate();
	return (
		<div className="App">
			<div className="fullScreen">
				<div className="App-Title">
					HOW TO PLAY HANGMAN
				</div>
				<div className="App-AboutUsText">
                    Read the instructions below to find out how to play the game!
				</div>

			    <br></br>
                <div className="App-AboutUsText">
                    Step 1: Press the play button on the home screen to start a game.
				</div>
                <img src={instructions1} className="instructionImage" alt="Start Game"/>

			    <br></br>
			    <br></br>
                <div className="App-AboutUsText">
                    Step 2: Try to guess the word by clicking on the letters on the keyboard.<br></br>
                    For every correct letter, you fill up the blanks. For every wrong letter, a part of the hangman figure will be drawn hanging from the gallows.
				</div>
                <img src={instructions2} className="instructionImage" alt="Start Game"/>

			    <br></br>
			    <br></br>
                <div className="App-AboutUsText">
                    Step 3: You have 6 chances at wrong attempts. If you use up all 6 chances, the game ends, and you lose.
				</div>
                <img src={instructions3} className="instructionImage" alt="Start Game"/>

			    <br></br>
			    <br></br>
                <div className="App-AboutUsText">
                    Step 4: If you guess the word, then you win the round! You can continue playing by pressing the <i className="fa-solid fa-forward"></i> button on the bottom left.
				</div>
                <img src={instructions4} className="instructionImage" alt="Start Game"/>

                <br></br>
                <br></br>
				<div className="App-Title">
					SPECIAL MOVES
				</div>
                <div className="App-AboutUsText">
                    I. You can toggle the keyboard mode from QWERTY to CLASSIC by toggling the switch above the keyboard. <br></br>
                    II. You can use a total of 3 hints per round to fill up random letters if you get stuck.
				</div>
                <img src={instructions5} className="instructionImage" alt="Start Game"/>
				<div className='d-flex mt-3 justify-content-around'>
                    <Button 
                        icon={<i className="fa-solid fa-house"></i>} 
                        content={"Home"} 
                        title="Home"
                        handleClick={() => {navigate("/")}}>
                    </Button>
				</div>
			</div>
		</div>
	)
}

export default HowToPlay;