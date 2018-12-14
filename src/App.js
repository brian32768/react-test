import React, {Component, PureComponent} from 'react'
import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom'
import {ChronoContext} from './chrono-context'
import Home from './home'
import About from './about'
import NotFound from './notfound'
import Clock from './clock'

import '/App.scss'

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
        console.log("callbackClock", newTime)
    }

    render() {
        return (
            <div>
                <header>
                    <ChronoContext.Provider value={{onTick:this.callbackClock}}>
                    <Clock/>
                    </ChronoContext.Provider>
                    
                    <CCButton name="Home"  url="/" />
                    <CCButton name="About" url="/about" />
                    <CCButton name={this.state.now} url="/" />
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
PrimaryLayout.contextType = ChronoContext;

const App = () => (
    <BrowserRouter><PrimaryLayout/></BrowserRouter>
)

export default App;
console.log('App loaded.');
