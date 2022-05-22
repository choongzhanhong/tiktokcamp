import React, { useState, useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import LetterKey from './components/LetterKey.js';
import Word from './components/Word';
import './helpers'
import { checkWin } from './helpers';

function App() {
	const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
	const [score, setScore] = useState(0);
	const [isPlay, setPlay] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [randWord, setWord] = useState('');
	const [selectedLetter, setSelectedLetter] = useState('');
	const [remainingHints, setNumHints] = useState(3);

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
			setWord(data[0].toUpperCase())
			setCorrectLetters([]);
			setWrongLetters([]);
			setNumHints(3);
			setSelectedLetter([]);
			console.log(randWord);
		}
		});

		return () => { ignore = true }
	}

	// Function to provide a hint letter (letter that appears the least)
	const giveHint = () => {
		if (remainingHints > 0) {
			let letterHint = randWord.charAt(Math.floor(Math.random() * randWord.length));
			console.log(letterHint);
			setSelectedLetter(letterHint);
			setNumHints(remainingHints-1);
		}
	}
	
	useEffect(() => {
		newGame();
	}, []);
	
	useEffect(() => {
		const handleKeydown = event => {
			const { key, keyCode } = event;
			const letter = key.toUpperCase();
			setSelectedLetter(letter);
			console.log(checkWin(randWord, correctLetters, wrongLetters))
		}
		window.addEventListener('keydown', handleKeydown);

		return () => window.removeEventListener('keydown', handleKeydown);
	}, [isPlay, correctLetters, wrongLetters]);

	return (
		<>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
			integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
			crossOrigin="anonymous" />

		<div className="App">
			<div className='container gameScreen'>
				<div className='gameElement_row'>
					{/* HANGMAN */}
					<div className='align-self-center'>
						random word: {randWord}<br></br>
						correct letters: {correctLetters}<br></br>
						wrong letters: {wrongLetters}
					</div>
	
					{/* KEYBOARD & BUTTONS*/}
					<div className='align-self-center'>
						<Word word={randWord} correctLetters={correctLetters}></Word>

						<div className='keyboard'>
							{alphabet.map(letter => (
								<LetterKey key={letter} letter={letter} selectedLetter={selectedLetter} word={randWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
							))}
						</div>

						<div className='d-flex mt-3'>
							<div className="mr-auto p-2">
								<Button content={<i class="fa-solid fa-house"></i>} handleClick={newGame} title="Home"></Button>
							</div>
							<div className='p-2'>
								{/* <Button content={"Need a hint? ("+remainingHints+" left)"} handleClick={giveHint}></Button> */}
								<Button content={<i class="fa-solid fa-circle-question"></i>} handleClick={giveHint} title="Hint"></Button>
							</div>
							<div className='p-2'>
								<Button content={<i class="fa-solid fa-forward"></i>} handleClick={newGame} title="Skip"></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>

	);
}

export default App;

