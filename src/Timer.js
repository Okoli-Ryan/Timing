import React, {useState, useEffect} from 'react';
import Clock from "./Clock";
import Stopwatch from "./stopwatch_buttons";

var s;

function Timer(){

    const [disabled, setDisabled] = useState(true);

    var [valueTime, setValue] = useState(0);

    const increaseValue = () => {
        s = setInterval(repeat, 1000);
        setDisabled(false);
    };

    function repeat() {
        valueTime ++;
        setValue(valueTime);
        if (valueTime === 3600)
            stop();
    }

    const clearValue = () => {
        clearInterval(s);
        setValue(0);
        setDisabled(true);
    };

    const stop = () => {
        clearInterval(s);
        setDisabled(true);
    };

    return(
        <div>
            <div className="jumbotron">
                <h2 className="text-center">Stopwatch Timer</h2>
            </div>
            <Clock minuteTime={Math.floor(valueTime/60)} secondTime={Math.floor(valueTime%1000)}/>
            <Stopwatch increase={increaseValue} clear={clearValue} disable={disabled} stop={stop} valueTime={valueTime}/>
        </div>
    )
}

export default Timer;