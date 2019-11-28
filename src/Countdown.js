import React, {useState} from 'react';
import Clock from "./Clock";
import Stopwatch from "./Countdown_buttons";

var s;
const Countdown = () => {

    var [secondTime, setTime] = useState(0);
    var [minuteTime, setTiming] = useState(0);
    var [disabled, setDisabled] = useState(true);

    function setMinute(val){
        if(val < 60) {
            setTime(val);
        }
    }

    function setSecond(val){
        if(val < 60) {
            setTiming(val);
        }
    }

    function startCountdown(){
        setDisabled(false);
        // secondTime *= 1000;
        s = setInterval(repeat, 1000)
    }

    function repeat() {

        if (minuteTime === 0 && secondTime === 0) {
            stop();
        }

        else if(secondTime <= 0){
            secondTime = 59;
            setTime(secondTime);
            minuteTime-=1;
            setTiming(minuteTime);
        }

        else {
            secondTime--;
            setTime(secondTime);
        }
    }

    function stop() {
        clearInterval(s);
        setDisabled(true);
    }

    function clear() {
        setTime(0);
        setTiming(0);
        stop();
        setDisabled(true);
    }

    return(
        <div>
            <div className="jumbotron">
                <h2 className="text-center">Countdown Timer</h2>
            </div>
            <Clock secondTime={secondTime} minuteTime={minuteTime}/>
            <Stopwatch countdown={setSecond} countdown_two={setMinute} startCountdown={startCountdown} stop={stop} disabled={disabled} clear={clear}/>

        </div>
    )
};

export default Countdown;