import React, { useState, useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import LetterKey from './components/LetterKey.js';
import Word from './components/Word';

function App() {
	const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
	const [isPlay, setPlay] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [randWord, setWord] = useState('');
	const [selectedLetter, setSelectedLetter] = useState('');

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
			setSelectedLetter([]);
			console.log(randWord);
		}
		});

		return () => { ignore = true }
	}
	
	useEffect(() => {
		newGame();
	}, []);
	
	useEffect(() => {
		const handleKeydown = event => {
			const { key, keyCode } = event;
			const letter = key.toUpperCase();
			setSelectedLetter(letter);
		}
		window.addEventListener('keydown', handleKeydown);

		return () => window.removeEventListener('keydown', handleKeydown);
	}, [isPlay, correctLetters, wrongLetters]);



	return (
		<>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
			integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
			crossOrigin="anonymous" />

		<div className="App">
			random word: {randWord}<br></br>
			correct letters: {correctLetters}<br></br>
			wrong letters: {wrongLetters}

			{/* HANGMAN */}
			<div className='row'>
			</div>

			<Word word={randWord} correctLetters={correctLetters}></Word>
			
			{/* KEYBOARD */}
			<div className='row'>
				<div className='col-1'></div>
				<div className='col-10'>
					<div className='row'>
						{alphabet.map(letter => (
							<LetterKey key={letter} letter={letter} selectedLetter={selectedLetter} word={randWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
						))}
					</div>
				</div>
				<div className='col-1'></div>
			</div>

			<div className='row mt-2'>
				<Button content="Hint"></Button>
				<Button content="Skip" handleClick={newGame}></Button>
			</div>
		</div>
		</>

	);
}

export default App;

