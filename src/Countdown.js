import React, {useState} from 'react';
import Clock from "./Clock";
import Stopwatch from "./Countdown_buttons";
// import Navigation from './Nav';


var s;
const Countdown = () => {

    var [secondTime, setTime] = useState(0);
    var [minuteTime, setTiming] = useState(0);
    var [hourTime, setHour] = useState(0);
    var [disabled, setDisabled] = useState(true);

    function setMinute(val){
        if(val < 60) {
            setTime(val);
        }
    }

    function setHours(val){
        if(val < 24) {
            setHour(val);
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

        if (minuteTime === 0 && secondTime === 0 && hourTime === 0) {
            stop();
        }

        else if(secondTime <= 0){
                setHour(hourTime);
                secondTime = 59;
                setTime(secondTime);
                minuteTime -= 1;
                setTiming(minuteTime);
                if (minuteTime < 0){
                    minuteTime = 59;
                    setTiming(minuteTime);
                    hourTime-=1;
                    setHour(hourTime);
                }

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
        setHour(0);
        stop();
        setDisabled(true);
    }

    return(
        <>
            {/*<Navigation/>*/}
        <div>
            <div className="jumbotron">
                <h2 className="text-center">Countdown Timer</h2>
            </div>
            <Clock secondTime={secondTime} minuteTime={minuteTime} hourTime={hourTime}/>
            <Stopwatch countdown={setSecond} countdown_two={setMinute} countdown_three={setHours} startCountdown={startCountdown} stop={stop} disabled={disabled} clear={clear}/>

        </div>
            </>
    )
};

export default Countdown;