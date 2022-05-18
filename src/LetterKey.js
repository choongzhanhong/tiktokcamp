import React, { useState } from 'react';

// using classes
class LetterKey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            letter: props.letter
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isPressed: true});
        console.log(this.state.letter);
    }

    render () {
        return (
            <div className='col-2'>
                <div className={(this.state.isPressed ? 'scale-down-center letterKey': 'letterKey') + ' mt-2'}  onClick={this.handleClick} style={this.state.isPressed ? {backgroundColor: "dimgray"} : {backgroundColor: "lightgray"}}>
                    <div>{this.state.letter}</div>
                </div>
            </div>
        );
    }
  }

//// using functional components and hooks
// function LetterKey(props) {
//     const [isPressed, setPressed] = useState(false);

//     return (
//         <div className='col-1'>
//             <div className='letterKey' onClick={() => setPressed(true)} style={isPressed ? {backgroundColor: "dimgray"} : {backgroundColor: "black"}}>
//             {/* <div className={isPressed ? 'scale-down-center letterKey': 'letterKey'}  onClick={() => setPressed(true)} style={isPressed ? {backgroundColor: "dimgray"} : {backgroundColor: "black"}}> */}
//                 <h2>{props.letter}</h2>
//                 {/* <p>{"" + isPressed}</p> */}
//             </div>
//         </div>
//     );
// }
  
  export default LetterKey;