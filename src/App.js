import React, {Component, PureComponent} from 'react';
import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom';

import Home from './home';
import About from './about';
import NotFound from './notfound';
import Clock from './clock';

import '/App.scss';

class CCButton extends Component {
    render() {
        return (
            <span>
            <Link to={this.props.url} className="button">{this.props.name}</Link>
            </span>
        );
    }
}

class PrimaryLayout extends Component {
    render() {
        return (
            <div>
                <header>
                    <Clock />
                    <CCButton name="Home"  url="/" />
                    <CCButton name="About" url="/about" />
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
