import React from 'react';
import './App.css';

function Clock({secondTime, minuteTime}){

    var min = minuteTime;
    var sec = secondTime;

    function format(e) {
        if(e < 10){
            return "0" + e.toString();
        }
        else
            return e.toString();
    }

    min = format(min);
    sec = format(sec);

    return(
            <div className="rounded-circle m-auto circle">
                <span className="text-center timer">{min}:{sec}</span>
            </div>
    )
}

export default Clock;