import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { MyContext } from '../App';

const Home = () => {
    const me = useContext(MyContext);
    console.log("My context says I am " + me.status);
    return (
        <Card border='primary' bg='light' text='dark'>
            <Card.Header>This is the Card. My status is "{me.status}".</Card.Header>
        <Card.Body>
            <Card.Title>Hi! This is the Card.Title</Card.Title>
            <Card.Text>
                This is the home of react-test, in a Bootstrap Card.
                There are <i>many</i> Card formatting options. Follow the link to learn more.
            </Card.Text>
            <Card.Link href="https://react-bootstrap.netlify.app/docs/components/cards">Card docs</Card.Link>
        </Card.Body>
        <Card.Footer>This is the Card.Footer</Card.Footer>
        </Card>
    )
}
export default Home;