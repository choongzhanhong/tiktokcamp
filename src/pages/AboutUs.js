import React from 'react';
import { useNavigate } from "react-router-dom"
import Button from '../components/Button';

function Aboutus() {
	let navigate = useNavigate();
	return (
		<div className="AboutUs">
			<h1>ABOUT US</h1>
			<p>
			Hi there! We are a group of undergraduates from NUS, Zhan Hong, Johannine, Justin, Yi Ting and Joan. We are extremely passionate about learning more about the world of web development and web applications. Thank you for being there with us as we embark on our journey of exploring that fascinating world. As our first step into web development, we have created our version of a game we are sure lives in all of your childhood memories – hangman! Hope you have fun playing!
			</p>
		<br></br>
			<h2>MEET THE CREATORS</h2>
			<p>Zhan Hong. Communication Student. (fun fact)</p>
			<p>Johannine. Computer Engineering Student. Sells stickers @omatian.</p>
			<p>Justin. Computer Science Student. (fun fact)</p>
			<p>Yi Ting. Data Science Student. Likes all space things.</p>
			<p>Joan. Engineering Student. Enjoys reading Webtoons</p>
			
			<div className='d-flex mt-3 justify-content-around'>
			<Button 
				icon={<i className="fa-solid fa-house"></i>} 
				content={"Go Home"} 
				title="Home"
				handleClick={() => {navigate("/")}}>
			</Button>
			</div>
		</div>
	)
}

export default Aboutus;