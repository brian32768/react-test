import React, {useState} from 'react'  // eslint-disable-line no-unused-vars
import Map, {OpenLayersVersion} from '@map46/react-simplemap'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars

const Map46 = () => {
    const [lon]  = useState(-122);
    const [lat]  = useState( 44.5);
    const [zoom] = useState(6);

    return (
        <>
            <Clock/><br />
            Eventually, every app I write ends up with a map in it.
            <h3><OpenLayersVersion/></h3>
            <Map lon={lon} lat={lat} zoom={zoom} style={{position:'relative',top:0,width:600,height:400,padding:10}}/>
        </>
    )
}
export default Map46;
