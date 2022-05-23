import React, { useState, useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import Hangman from './components/Hangman';
import LetterKey from './components/LetterKey';
import Word from './components/Word';
import { checkWin } from './helpers';
import GameOver from "./components/GameOver";




function App() {
	const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
	const MAX_HINTS = 3;

	const [score, setScore] = useState(0);
	const [isPlay, setPlay] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [randWord, setWord] = useState('');
	const [selectedLetter, setSelectedLetter] = useState('');
	const [remainingHints, setNumHints] = useState(MAX_HINTS);
	const [gameStatus, setStatus] = useState('');
	const [gameOver, setGameOver] = useState(false); //Set to true if game over.

	// Function to fetch random word from API
	const newGame = () => {
		const API_URL = "https://random-word-api.herokuapp.com/word";
		let ignore = false;

		fetch(API_URL)
		.then((response) => {
		return response.json();
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
		}
		});

		return () => { ignore = true }
	}

	// Function to provide a hint letter (letter that appears the least)
	const giveHint = () => {
		if (remainingHints > 0) {
			let remainingLetters = randWord.split('').filter(c => !correctLetters.includes(c)).join('');
			let letterHint = remainingLetters.charAt(Math.floor(Math.random() * remainingLetters.length));
			setSelectedLetter(letterHint);
			setNumHints(remainingHints-1);
		}
	}
	
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
	}, [correctLetters, wrongLetters]);

	useEffect(() => {
		if (gameStatus != "") {
			setPlay(false);
		}
		if (gameStatus == "lose") {
			setGameOver(true);
		}
	}, [gameStatus]);

	return (
		<div className="App">
			<div className='container gameScreen'>
				{/*GAME OVER MODAL*/}
				<GameOver gameOver={gameOver} newGame={newGame} setGameOver={setGameOver} />

				<div className='gameElement_row align-self-center'>
					{/* HANGMAN FIGURE*/}
					<div className='align-self-center'>
						<Hangman wrongLetters={wrongLetters} />
						<br></br>
						random word: {randWord}<br></br>
						correct letters: {correctLetters}<br></br>
						wrong letters: {wrongLetters}<br></br>
						game status: {gameStatus}<br></br>
						can we play? {isPlay ? "yes" : "no"}<br/>
						gameover? {gameOver? "yes":"no"}
					</div>

					{/* KEYBOARD & BUTTONS*/}
					<div className='align-self-center'>
						<Word word={randWord} correctLetters={correctLetters}></Word>

						<div className='keyboard'>
							{alphabet.map(letter => (
								<LetterKey key={letter} isPlay={isPlay} letter={letter} selectedLetter={selectedLetter} word={randWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
							))}
						</div>

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
								<Button content={<i className="fa-solid fa-forward"></i>} handleClick={newGame} title="Skip"></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

