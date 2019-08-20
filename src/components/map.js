import React, {useState} from 'react'  // eslint-disable-line no-unused-vars
import {Map, OpenLayersVersion} from '@map46/react-simplemap'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars
import {Container, Row, Col} from 'reactstrap';

const MapPage = () => {
    return (
        <>
            <Clock/>
            <OpenLayersVersion/>

            <Container>
                <Row>
                    <Col>item 1</Col>
                    <Col>item 2</Col>
                    <Col>item 3</Col>
                </Row>
            </Container>

            <section className="nav-section">
                <div className="mapbutton">[1]</div>
                <div className="mapbutton">[2]</div>
                <div className="mapbutton">[3]</div>
            </section>

            <section className="main">

                <section className="map-section">
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

            </section>
        </>
    )
}
export default MapPage;
