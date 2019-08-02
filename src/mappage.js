import React, {useState} from 'react'
import Map, {OpenLayersVersion} from '@map46/react-simplemap'
import Clock from './clock'

const MapPage = () => {
    const [lon, setLon]   = useState(-122);
    const [lat, setLat]   = useState( 44.5);
    const [zoom, setZoom] = useState(6);

    return (
        <>
            <Clock/><br />
            Eventually, every app I write ends up with a map in it.
            <h3><OpenLayersVersion/></h3>
            <Map lon={lon} lat={lat} zoom={zoom} style={{position:'relative',top:0,width:600,height:400,padding:10}}/>
        </>
    )
}
export default MapPage;
