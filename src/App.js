import React from 'react';
import './App.css';

// Routing pages
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'		// npm install react-router-dom
import Aboutus from './pages/AboutUs';
import GamePage from './pages/GamePage';
import MainMenu from './pages/MainMenu';
import HowToPlay from './pages/HowToPlay';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainMenu />} />
				<Route path="/aboutus" element={<Aboutus />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/instructions" element={<HowToPlay />} />
			</Routes>
		</Router>
	);
}

export default App;

