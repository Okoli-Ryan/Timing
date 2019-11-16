import React from 'react';
import {Button} from 'reactstrap';

var Stopwatch = ({increase, clear, stop, disable, valueTime}) => {

    const startButton = (<Button className="btn btn-secondary btn-lg" onClick={increase}>
        Start
    </Button>);
    const stopButton = (<Button className="btn btn-danger btn-lg" onClick={stop}>
        Stop
    </Button>);

    return (
        <div className="text-center mt-4">
                {disable ? startButton : stopButton}
                <Button className="btn btn-secondary btn-lg ml-2" onClick={clear} disabled={valueTime === 0}>
                    clear
                </Button>
        </div>
    )
}

export default Stopwatch;