import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Watch from "./Watch";

export default function Home() {
    // const [time, setTime] = useState({second: 0, minute: 0});
    // const [error, setError] = useState(false);

    const times = ["8-3-2-Africa/Lagos", "4-3-3-Etc/UTC"];

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

//useEffect when reloading page for error
//collapse on route change with4 callback
//transitions