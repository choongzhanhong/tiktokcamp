import React from 'react';
import '../MainMenu.css';
import { useNavigate } from "react-router-dom"
import Button from '../components/Button';

function Aboutus() {
	let navigate = useNavigate();
	return (
		<div className="App">
			<div className="fullScreen">
				<div className="App-Title">
					ABOUT US
				</div>
				<div className="App-AboutUsText">
				Hi there! We are a group of undergraduates from NUS, Zhan Hong, Johannine, Justin, Yi Ting and Joan. We are extremely passionate about learning more about the world of web development and web applications. Thank you for being there with us as we embark on our journey of exploring that fascinating world. As our first step into web development, we have created our version of a game we are sure lives in all of your childhood memories – hangman! Hope you have fun playing!
				</div>
			<br></br>
				<div className="App-Title">
					THE CREATORS
				</div>
				<div className="App-AboutUsText">
					Zhan Hong. Communication Student. Likes to lift heavy things!
				</div>
				<div className="App-AboutUsText">
					Johannine. Computer Engineering Student. Sells stickers @omatian.
				</div>
				<div className="App-AboutUsText">
					Justin. Computer Science Student. Enjoys watching/playing tennis!
				</div>
				<div className="App-AboutUsText">
					Yi Ting. Data Science Student. Likes all space things.
				</div>
				<div className="App-AboutUsText">
					Joan. Engineering Student. Enjoys reading Webtoons
				</div>
				<br></br>
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

export default Aboutus;