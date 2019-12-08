import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Watch from "./Watch";

export default function Home() {

    const times = ["8-12-13-Africa/Lagos", "13-49-22-Etc/UTC"];

    const list = times.map((item, key) =>
        <Col key={key}>
           <Watch
               secondTime={item.split("-")[2]} minuteTime={item.split("-")[1]} hourTime={item.split("-")[0]} cityLoc={item.split("-")[3]}
           />
        </Col>
    );

    return(
        <div>
            <div className="jumbotron">
                <h2 className="text-center">World Clock</h2>
            </div>
            <Container>
                <Row>
                    {list}
                </Row>
            </Container>
        </div>
    )
}

//clear navigation search onChange

//collapse on route change
//transitions