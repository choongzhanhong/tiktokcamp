import React, { useState, useEffect } from 'react';

import './App.css';
import LetterKey from './LetterKey';
import Button from './Elements';

import word_data from './data/data.json'

function App() {
	const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
	const [isPlay, setPlay] = useState(false);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [word, setWord] = useState('');

  var level = "easy_words";
  var category = "Movies";

  const wordsArray = [...word_data[category][level]]
  var randWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

	return (
		<div className="App">
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossorigin="anonymous" />
      </head>

      <div>
        random word: {randWord}
      </div>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          {/* <div className='row'>
            <Button content="Play" />
          </div> */}
          <div className='row'>
            {alphabet.map(letter => (
            <LetterKey letter={letter} key={letter.id} />
            ))}
          </div>
        </div>
        <div className='col-2'></div>
      </div>
		</div>
	);
}

export default App;

