import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars
import {Map, OpenLayersVersion} from '@map46/react-simplemap'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars

import {Button} from 'reactstrap'  // eslint-disable-line no-unused-vars
import PrintButton from './print/printModal'  // eslint-disable-line no-unused-vars

const MapPage = () => {
    const minHgt = 400;
    const [winWid, setwinWid] = useState(window.innerWidth);
    const [winHgt, setwinHgt] = useState(window.innerHeight);

    useEffect(() => {
        const listener = () => {
            setwinWid(window.innerWidth);
            setwinHgt(window.innerHeight);
        }
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    return (
        <>
            <Clock/>
            <OpenLayersVersion/><br />
            width {winWid} x height {winHgt}
            <PrintButton/>
            <section className="map-section" style={winHgt>minHgt?{height:winHgt-200}:{}}>
                <Map center={[-122.6, 45.5]} zoom={14} className="simplemap"/>
                <div className="overview">
                    overview map
                </div>
            </section>

            <section className="table-section">
                <div className="flx f1">item1</div>
                <div className="flx f2">item2</div>
                <div className="flx f3">item3</div>
                <div className="flx f4">item4</div>
            </section>
        </>
    )
}
export default MapPage;
