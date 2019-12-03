import React, {useState} from 'react';
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
        if (valueTime === 86399)
            stop();
        else {
            valueTime++;
            setValue(valueTime);
        }
    }

    const clearValue = () => {
        clearInterval(s);
        setValue(0);
        setDisabled(true);
    };

    var hour = Math.floor(valueTime/3600);
    var min = (valueTime - (Math.floor(valueTime/3600)*3600) - Math.floor(valueTime%60))/60;
    var sec = Math.floor(valueTime%60);

    const stop = () => {
        clearInterval(s);
        setDisabled(true);
    };

    return(
        <div>
            <div className="jumbotron">
                <h2 className="text-center">Stopwatch Timer</h2>
            </div>
            <Clock minuteTime={min} secondTime={sec} hourTime={Math.floor(hour)}/>
            <Stopwatch increase={increaseValue} clear={clearValue} disable={disabled} stop={stop} valueTime={valueTime}/>
        </div>
    )
}

export default Timer;