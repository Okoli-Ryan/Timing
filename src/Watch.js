import React, {useState, useEffect} from 'react';
import Clock from "./Clock";
import axios from 'axios';

var s;

function Watch(props){

    const {hourTime, minuteTime, secondTime, cityLoc} = props;
    const val = (hourTime*3600) + (minuteTime*60) + (secondTime%60);

    var [valueTime, setValue] = useState(val);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {


        const fetchData = async () => {
            const result = await axios(
                'https://worldtimeapi.org/api/timezone/Africa/Lagos',
            );
            var er = result.data.datetime.toString().substring(11, 19).split(":");
            // console.log(result.data.datetime.toString().substring(11, 19).split(":"));
            valueTime = er[0]*3600 + er[1]*60 + er[2]%60;
                setValue(valueTime);

            increaseValue();

        };

        fetchData();
        return () =>
            clearInterval(s)

    }, []);

    const increaseValue = () => {
        s = setInterval(repeat, 1000);
        debugger;
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

    return(
        <div>
            <Clock minuteTime={(valueTime - (Math.floor(valueTime/3600)*3600) - Math.floor(valueTime%60))/60}
                   secondTime={Math.floor(valueTime%60)}
                   hourTime={Math.floor(valueTime/3600)}
                   cityLoc = {cityLoc}
            />
        </div>
    )
}

export default Watch;

//http://worldtimeapi.org/api/timezone