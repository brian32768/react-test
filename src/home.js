import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Can't export a const as default, silly rule.
// but I'm trying to demo the functional declaration of a component,
// so I am stuck with it.

export const Home = () => (
    <div id="home">
    <h2>Home</h2>
    <p>
    text goes here
    </p>
    </div>
)
