import React, { useState } from 'react';

// using classes
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            content: props.content
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isPressed: true});
        console.log(this.state.letter);
    }

    render () {
        return (
            <div  className='letterKey'>
                <h1>{this.state.content}</h1>
            </div>
        );
    }
  }
  
  export default Button;