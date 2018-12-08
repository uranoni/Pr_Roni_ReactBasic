import React, { Component } from 'react';

class Message extends Component {
  state = {
    text:"hello",
  }
  sayHi = () => {
    console.log(this)
    this.setState({
      text:"hi",
    });
  }
  render() {
    return (
      <div>
          {this.state.text}
          <button onClick={this.sayHi}>Say hi</button>
      </div>
    );
  }
}

export default Message;