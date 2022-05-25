import React, { useState, useEffect } from 'react';

import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Button from './components/Button';
import Hangman from './components/Hangman';
import LetterKey from './components/LetterKey';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import GameOver from "./components/GameOver";
import KeyboardToggle from './components/KeyboardToggle';

import { checkWin } from './helpers';
import Aboutus from './pages/AboutUs';
import GamePage from './pages/GamePage';
import MainMenu from './pages/MainMenu';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainMenu />} />
				<Route path="/aboutus" element={<Aboutus />} />
				<Route path="/gamepage" element={<GamePage />} />
			</Routes>
		</Router>
	);
}

export default App;

