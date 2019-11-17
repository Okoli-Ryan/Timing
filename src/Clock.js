import React from 'react';
const circle= {border: "2px solid #6F73B4", backgroundColor: "#B0E0E6", width: 300, height: 300};
const timer= {fontSize: 40, position: "relative", left: "30%", top: "37%"};

function Clock({secondTime}){

    // const checkDoubleDigit = () => {
    //     minute = Math.floor(secondTime/60)
    //     if(minute < 10)
    //         return "0" + minute;
    //     else
    //         return minute
    // }
    var minute = new Date(secondTime*10).getMinutes();
    var second = new Date(secondTime*10).getSeconds();
    var milli = new Date(Math.floor(secondTime%100)).getMilliseconds();

    var CalMinute = minute.toString().padStart(2, '0');
    var CalSecond = second.toString().padStart(2, '0');
    var CalMilli = milli.toString().padStart(2, '0');

    return(
            <div className="rounded-circle m-auto" style={circle}>
                <span style={timer} className="text-center">{CalMinute}:{CalSecond}:{CalMilli}</span>
            </div>
    )
}

export default Clock;