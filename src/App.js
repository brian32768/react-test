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
        url: PropTypes.string.isRequired,
        search: PropTypes.string
    }
    render() {
        console.log("CCButton", this.props.search);
        return (
            <>
            <Link
                to={{
                    pathname: this.props.url,
                    search: this.props.search
                }}
                className="button"
                >
                    {this.props.name}
            </Link>
            </>
        );
    }
}

class PrimaryLayout extends React.Component {

    state = {
        now: "MM/DD/YYYY, HH:MM:SS ??",
        aboutId: 0
    }

    constructor() {
        super();
        this.callbackClock = this.callbackClock.bind(this)
    }

    // Demo of children passing data back up to parents via context

    callbackClock(newTime) {
        // Update the time display right here in this parent component
        this.setState({
            now: newTime,
            aboutId: this.state.aboutId+1
        })
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
                    <CCButton name="about"   url="/about" search={ '?id=' + this.state.aboutId } />
                    <CCButton name="contact" url="/contact" />
                </header>
                <main>
                    <Switch> use this choose only one route
                        <Route exact path="/"        component={ Home } />
                        <Route       path="/about/:extras?"   render={props => <About text={this.props.title} {...props}/>} />                        ); }
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
