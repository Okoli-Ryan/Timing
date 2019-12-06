import React, {useState, useEffect} from 'react';
import Clock from "./Clock";

var s;

function Watch(props){

    const {hourTime, minuteTime, secondTime, cityLoc} = props;
    const val = (hourTime*3600) + (minuteTime*60) + (secondTime%60);

    var [valueTime, setValue] = useState(val);

    useEffect(() => {
        increaseValue();
        return () =>
            clearInterval(s)

    }, []);

    const increaseValue = () => {
        s = setInterval(repeat, 1000);
    };

    function repeat() {
        if (valueTime >= 86399) {
            valueTime = -1;
            setValue(valueTime);
        }
            valueTime++;
            setValue(valueTime);

    }
    //
    var hour = Math.floor(valueTime/3600);
    var min = (valueTime - (Math.floor(valueTime/3600)*3600) - Math.floor(valueTime%60))/60;
    var sec = Math.floor(valueTime%60);

    return(
        <div>
            <Clock minuteTime={min} secondTime={sec} hourTime={hour} cityLoc = {cityLoc}/>
        </div>
    )
}

export default Watch;