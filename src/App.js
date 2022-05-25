import React, { useState, useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import Hangman from './components/Hangman';
import LetterKey from './components/LetterKey';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import GameOver from "./components/GameOver";
import KeyboardToggle from './components/KeyboardToggle';

import { checkWin } from './helpers';
import Aboutus from './components/AboutUs';

function App() {
	const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
	const MAX_HINTS = 3;

	const [score, setScore] = useState(0);
	const [isPlay, setPlay] = useState(true); 							// Set to true if game is playable.
	const [keyboardSetting, setKeyboard] = useState('qwerty'); 		// Default keyboard setting: 'qwerty'. Can toggle to 'classic'
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [randWord, setWord] = useState('');
	const [selectedLetter, setSelectedLetter] = useState('');			// Set when keyboard key is pressed. 
	const [remainingHints, setNumHints] = useState(MAX_HINTS);			// Set to the number of hints left available.
	const [gameStatus, setStatus] = useState('');						// Set to 'win', 'lose' or '' (ongoing) (in helpers.js)
	const [gameOver, setGameOver] = useState(false);					//Set to true if game over.

	var generateRandomWord = require('random-words'); 					// npm install random-words

	// Function to fetch random word from API
	const newGame = () => {
		const API_URL = "https://random-word-api.herokuapp.com/word";
		let ignore = false;

		fetch(API_URL)
		.then((response) => {
			console.log("Response from API received")
			return response.json();
		})
		.catch((err) => {
			console.log(err);
			console.log("Generate using npm random-words.")
			let word = generateRandomWord();
			return [word];
		})
		.then((data) => {
		if (!ignore) {
			setPlay(true);
			setWord(data[0].toUpperCase());
			setCorrectLetters([]);
			setWrongLetters([]);
			setSelectedLetter([]);
			setNumHints(MAX_HINTS);
			setStatus('');
			setGameOver(false);
		}
		});

		return () => { ignore = true }
	}

	// Function to provide a hint letter
	const giveHint = () => {
		if (isPlay && remainingHints > 0) {
			let remainingLetters = randWord.split('').filter(c => !correctLetters.includes(c)).join('');
			let letterHint = remainingLetters.charAt(Math.floor(Math.random() * remainingLetters.length));
			setSelectedLetter(letterHint);
			setNumHints(remainingHints-1);
		}
	}
	
	// Set up new game (first time)
	useEffect(() => {
		newGame();
	}, []);
	
	// Handle keyboard press
	useEffect(() => {
		const handleKeydown = event => {
			if (isPlay) {
				const { key, keyCode } = event;
				const letter = key.toUpperCase();
				setSelectedLetter(letter);
			}
		}
		window.addEventListener('keydown', handleKeydown);

		return () => window.removeEventListener('keydown', handleKeydown);
	}, [isPlay, correctLetters, wrongLetters]);

	// Check win/lose status at every move
	useEffect(() => {
		let stat= checkWin(randWord, correctLetters, wrongLetters);
		setStatus(stat);
	}, [randWord, correctLetters, wrongLetters]);

	useEffect(() => {
		if (gameStatus !== "") {
			setPlay(false);
		}
		if (gameStatus === "lose") {
			setGameOver(true);
		}
	}, [gameStatus]);

	return (
		<div className="App">
			{/* temporary fullScreen */}
			<div className='fullScreen'> 
				<Aboutus />
			</div>

			<div className='fullScreen gameScreen'>
				{/*GAME OVER MODAL*/}
				<GameOver gameOver={gameOver} word={randWord} goHome={newGame} newGame={newGame} />

				<div className='gameElement_row align-self-center'>
					{/* HANGMAN FIGURE*/}
					<div className='align-self-center'>
						<Hangman wrongLetters={wrongLetters} />
						<Word word={randWord} correctLetters={correctLetters} gameStatus={gameStatus} ></Word>

						{/* TEMPORARY DISPLAY ITEMS --- remove before submission */}
						<br></br>
						random word: {randWord}<br></br>
						{/* correct letters: {correctLetters}<br></br> */}
						{/* wrong letters: {wrongLetters}<br></br> */}
						game status: {gameStatus}<br></br>
						can we play? {isPlay ? "yes" : "no"}<br/>
						gameover? {gameOver? "yes":"no"}
					</div>

					{/* KEYBOARD & BUTTONS*/}
					<div className='align-self-center'>

						{keyboardSetting === 'qwerty' &&
							<Keyboard isPlay={isPlay} selectedLetter={selectedLetter} word={randWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
						}
						{keyboardSetting === 'classic' &&
							<div className='keyboard_classic'>
								{alphabet.map(letter => (
									<LetterKey key={letter} isPlay={isPlay} letter={letter} selectedLetter={selectedLetter} word={randWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
								))}
							</div>
						}

						<div className='d-flex mt-3'>
							<div className="mr-auto p-2">
								<Button content={<i className="fa-solid fa-house"></i>} handleClick={newGame} title="Home"></Button>
							</div>
							<div className='p-2'>
								<div className='row'>
								<span className='align-self-center'>{remainingHints}/{MAX_HINTS} hints available&nbsp;</span>
								<Button content={<i className="fa-solid fa-circle-question"></i>} handleClick={giveHint} title="Hint"></Button>
								</div>
							</div>
							<div className='p-2'>
								<Button content={<i className="fa-solid fa-forward"></i>} handleClick={newGame} title="Next word" triggerFlash={(gameStatus === 'win')}></Button>
							</div>
						</div>
						<div className="mr-auto p-3">
							<KeyboardToggle keyboardSetting={keyboardSetting} setKeyboard={setKeyboard} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

