import React from 'react'
import Clock from './clock'

// This shows the component-as-a-function pattern

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <h3><Clock/></h3>
            <div id="picture"></div>
        </>
    )
}
export default Home;
