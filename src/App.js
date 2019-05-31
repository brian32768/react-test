// App.js react-test
//
import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom'
import {ChronoContext} from './chrono-context'
import Home from './home'
import About from './about'
import Contact from './Contact'
import NotFound from './notfound'
import Clock from './clock'

import '/App.scss'

class CCButton extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }
    render() {
        return (
            <>
            <Link to={this.props.url} className="button">{this.props.name}</Link>
            </>
        );
    }
}

class PrimaryLayout extends React.Component {
    constructor() {
        super();
        this.callbackClock = this.callbackClock.bind(this)
        this.state = {
            now: "MM/DD/YYYY, HH:MM:SS ??",
        }
    }

    // Demo of children passing data back up to parents via context

    callbackClock(newTime) {
        // Update the time display right here in this parent component
        this.setState({now: newTime})
        //console.log("callbackClock", newTime)
    }

    render() {
        return (
            <div>
                <header>
                <h2>Single page application {this.state.now}</h2>
                    <ChronoContext.Provider value={{onTick:this.callbackClock}}>
                    <Clock/>
                    </ChronoContext.Provider>
                    <CCButton name="home"    url="/" />
                    <CCButton name="about"   url="/about" />
                    <CCButton name="contact" url="/contact" />
                </header>
                <main>
                    <Switch> use this choose only one route
                        <Route exact path="/"        component={ Home } />
                        <Route       path="/about"   render={props => <About text={this.props.title} {...props}/>} />                        ); }
                        <Route       path="/contact" component={ Contact } />
                        <Route       path="/404"     component={ NotFound } />
                        <Redirect to="/404" />
                    </Switch>
                </main>
            </div>
        );
    }
}
PrimaryLayout.contextType = ChronoContext;

const App = () => (
    <BrowserRouter><PrimaryLayout title="Turtles all the way down"/></BrowserRouter>
)

export default App;
console.log('App loaded.');
