import React from 'react'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars
import Counter from './counter'  // eslint-disable-line no-unused-vars

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <h3><Clock/></h3>
            <div id="picture"></div>
            <Counter/>
        </>
    )
}
export default Home;
