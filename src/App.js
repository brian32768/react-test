import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

import Home from './home';
import About from './about';
import NotFound from './notfound';

class Button extends Component {
    render() {
        return (
            <button><Link to={this.props.url}>{this.props.name}</Link></button>
        );
    }
}

class PrimaryLayout extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>react-test</h1>
                    <Button name="home" url="/"/>
                    <Button name="about" url="/about"/>
                </header>
                <main>
                <Switch>
                    <Route exact path="/"      component={Home} />
                    <Route       path="/about" component={About} />
                    <Route       path="/404"   component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
                </main>
            </div>
        );
    }
}

const App = () => (
    <BrowserRouter><PrimaryLayout/></BrowserRouter>
)

export default App;
console.log('App loaded.');
