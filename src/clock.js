import React, {useState, useEffect} from 'react'

const Clock = () => {
    const [time, setTime] = useState("The Time Goes Here");

    useEffect(() => {
        setInterval(intervalHandler, 1000);
    }, []);

    const intervalHandler = () => {
        let d = new Date();
        setTime(d.toLocaleString());
    }

    return (
        <div className="clock">{time}</div>
    );
}
export default Clock;
