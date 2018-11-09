import React from "react";
import ReactDOM from "react-dom";
import './App.css';

// Define a new React component.
class HelloMessage extends React.Component {
  render() {
      return <div>Hello, your name is probably not {this.props.name}.</div>;
  }
}

// Mount the component onto the DOM in the div known as "app".
let mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Brian" />, mountNode);

// That's all!
