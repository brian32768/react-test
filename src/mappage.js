import React from 'react'
import Map from '@map46/react-simplemap'
import Clock from './clock'

const MapPage = () => {
    return (
        <>
            <Clock/><br />
            Eventually, every app I write ends up with a map in it.
            <Map style={{position:'relative',top:0,width:600,height:400,padding:10}}/>
        </>
    )
}
export default MapPage;
