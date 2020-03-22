import React from 'react';
import {Container, Row} from 'reactstrap';
import WatchGroup from "./WatchGroup";
// import Navigation from './Nav';

export default function Home() {

    return(
        <>
            {/*<Navigation/>*/}
        <div>
            <div className="jumbotron">
                <h2 className="text-center">World Clock</h2>
            </div>
            <Container>
                <Row>
                    <WatchGroup/>
                </Row>
            </Container>
        </div>
            </>
    )
}