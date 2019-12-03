import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Clock from "./Clock";
import {location_list} from './Location_list';

export default function Home() {

    const times = ["8-12-13-Philadelphia", "13-49-22-New York", "0-0-13-Lagos", "23-12-9-Shanghai"];
    const list = times.map((item, key) =>
        <Col key={key}>
           <Clock secondTime={item.split("-")[2]} minuteTime={item.split("-")[1]} hourTime={item.split("-")[0]} cityLoc={item.split("-")[3]}/>
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

//http://worldtimeapi.org/api/timezone