import React from "react";
import ReactDOM from "react-dom";
import './App.css';

class HelloMessage extends React.Component {
  render() {
      return <div>Hello, your name is probably not {this.props.name}.</div>;
  }
}

let mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Brian" />, mountNode);
