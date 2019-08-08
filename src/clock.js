import React, {useState, useEffect, useRef} from 'react'  // eslint-disable-line no-unused-vars

// This happens to be a good place to experiment with useRef.

const Clock = () => {
    const [time, setTime] = useState("The Time Goes Here");
    const flibberty = useRef('hi');
    const [jibberty, setJibberty] = useState("bri");

    useEffect(() => {
        const id = setInterval(() => {
            let d = new Date();
            setTime(d.toLocaleString());
            flibberty.current = Math.round(d.getTime() / 1000).toString();
            setJibberty(flibberty.current);
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <div className="clock">{time} {flibberty.current} {jibberty}</div>
    );
}
export default Clock;
