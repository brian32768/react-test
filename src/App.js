// App.js react-test
//
import React from 'react'  // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom'  // eslint-disable-line no-unused-vars
import Home from './home'
import About from './about'
import MapPage from './mappage'
import Contact from './contact'
import NotFound from './notfound'

import '/App.scss'

const CCButton = (props) => {
    return (
        <>
        <Link to={{
                pathname: props.url,
                search: props.search
            }}
            className="button"
            >
            {props.name}
        </Link>
        </>
    );
}
CCButton.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    search: PropTypes.string
}

const PrimaryLayout = () => {  // eslint-disable-line no-unused-vars
    return (
        <div>
            <header>
            <h2>Single page application</h2>
                <CCButton name="home"    url="/"/>
                <CCButton name="about"   url="/about"/>
                <CCButton name="map"     url="/map"/>
                <CCButton name="contact" url="/contact"/>
            </header>
            <main>
                <Switch> use this choose only one route
                    <Route exact path="/"        component={Home} />
                    <Route       path="/about"   component={About} />
                    <Route       path="/map"     component={MapPage} />
                    <Route       path="/contact" component={Contact} />
                    <Route       path="/404"     component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </main>
        </div>
    )
}
const App = () => (
    <BrowserRouter><PrimaryLayout title="Turtles all the way down"/></BrowserRouter>
)
export default App;
