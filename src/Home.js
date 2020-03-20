import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Watch from "./Watch";
import Navigation from "./Nav";

export default function Home() {

    let date = new Date();

    var [val, setVal] = React.useState((date.getHours() * 3600 + date.getMinutes() * 60) + (date.getSeconds() % 60));

    React.useEffect(() => {

        setTimeout(repeat, 1000);

        function repeat(){
            // console.log(val);
            setVal(val + 1);
        }

    }, [val]);

    const times = ["8-3-2-Africa/Lagos", "4-3-3-Etc/UTC"];

    const list = times.map((item, key) =>
        <Col key={key}>
           <Watch
               secondTime={item.split("-")[2]} minuteTime={item.split("-")[1]} hourTime={item.split("-")[0]} cityLoc={item.split("-")[3]}
           />
        </Col>
    );

    return(
        <>
            <Navigation/>
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
            </>
    )
}