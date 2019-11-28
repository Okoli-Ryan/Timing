import React from 'react';
import {Button} from 'reactstrap';
import './App.css';


var Stopwatch = (props) => {

    const startButton = (<Button className="btn btn-secondary ml-2" onClick={props.increase}>
        Start
    </Button>);
    const stopButton = (<Button className="btn btn-danger ml-2" onClick={props.stop}>
        Stop
    </Button>);

    return (
            <div className="mt-3 mb-2 text-center">
                {props.disable ? startButton : stopButton}
                <Button className="btn btn-secondary ml-2" onClick={props.clear} disabled={props.valueTime === 0}>
                    clear
                </Button>
        </div>
    )
}

export default Stopwatch;