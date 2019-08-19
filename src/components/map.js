import React, {useState} from 'react'  // eslint-disable-line no-unused-vars
import {Map, OpenLayersVersion} from '@map46/react-simplemap'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars

const MapPage = () => {
    return (
        <>
            <Clock/>
            <OpenLayersVersion/>
            <div className="mappage">
                <div className="row">
                    <div className="mapnav">
                        <div className="mapbutton">[1]</div>
                        <div className="mapbutton">[2]</div>
                        <div className="mapbutton">[3]</div>
                    </div>
                    <Map center={[-122.6, 45.5]} zoom={14} className="simplemap"/>
                </div>
                <div className="row overview">
                    overview map
                </div>
            </div>
        </>
    )
}
export default MapPage;
