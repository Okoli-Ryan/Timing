import React from 'react';
import './App.css';

function Clock(props){

    var min = props.minuteTime;
    var sec = props.secondTime;
    var hour = props.hourTime;
    var cityLoc = props.cityLoc;

    function format(e) {
        if(e === "")
            return "00";
        else if(e < 10){
            return "0" + e.toString();
        }
        else
            return e.toString();
    }

    min = format(min);
    sec = format(sec);
    hour = format(hour);

    return(
        <div className="mb-3 text-center">
            <div className="rounded-circle m-auto circle">
                <span className="text-center timer">{hour}:{min}:{sec}</span>
            </div>
            <div className="text-center">
                {cityLoc}
            </div>
        </div>
    )
}

export default Clock;