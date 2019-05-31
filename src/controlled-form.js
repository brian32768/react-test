import React from 'react'
import uuidv4 from 'uuid/v4'
import './todo.css'

class Todo extends React.Component {

    state = {
        task: '',
        items: []
    };

    render() {
        return (
            <div className="Todo">
            <h1>Mew Task:</h1>
            </div>
        );
    }
}
