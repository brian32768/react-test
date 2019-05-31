import React from 'react'
import uuidv4 from 'uuid/v4'
//import './todo.css'

export class ContactForm extends React.Component {

    state = {
        name: ''
    }

    onChange = (value) => {
        console.log("Chhhanged to ", value);
        this.setState({
            name: this.state.name + 'a'
        })
    }

    render() {
        return (
            <div className="contact">
            We are most happy to serve you.
            <form>
            <input type="text" value={ this.state.name } onChange={ this.onChange }/>
            <input type="submit"/>
            </form>
            </div>
        );
    }
}
