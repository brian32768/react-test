import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Home from './components/Home';

export const MyContext = React.createContext({status:'HAPPY'});

const App = () => {
    // Parcel will preprocess this image file and bundle only the thumbnail.
    let turtleUrl = (new URL('../assets/babyturtle.png?width=256', import.meta.url)).toString();
    let SomeContent = Home;
    const [ username, setUsername ] = useState('(not logged in)');

    const [status, setStatus] = useState('Harmless');

    const handleLogin = (user) => {
        setUsername(user);
        alert(`Logging you in now, ${user}`);
    }


    return (
        <>
            <h1>Turtle</h1>
            <img src={turtleUrl} />
            <Home/>
        </>
    )
}
export default App;
