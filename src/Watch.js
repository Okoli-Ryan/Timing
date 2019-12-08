import React, {useState, useEffect} from 'react';
import Clock from "./Clock";
import axios from 'axios';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import ModalError from './ModalError'

function Watch(props){

    var s;
    var {hourTime, minuteTime, secondTime, cityLoc} = props;

    const val = (hourTime*3600) + (minuteTime*60) + (secondTime%60);

    var [valueTime, setValue] = useState(val);
    const [isLoading, setIsLoading] = useState(true);
    const [abbre, setAbbre] = useState(true);
    const [date, setDate] = useState(true);
    const [dst, setDST] = useState(true);
    const [offset, setOffset] = useState(true);
    const [error, setError] = useState(false);

    function handleRefresh(){
        setError(false);
    }



    useEffect(() => {


        const fetchData = async () => {
            try {

                const result = await axios(
                    `https://worldtimeapi.org/api/timezone/${cityLoc}`,
                );

                setAbbre(result.data.abbreviation.toString());
                setDate(result.data.datetime.toString().substring(0, 10));
                setDST(result.data.dst);
                setOffset(result.data.utc_offset);
                var er = result.data.datetime.toString().substring(11, 19).split(":");
                valueTime = er[0] * 3600 + er[1] * 60 + er[2] % 60;
                setIsLoading(false);
                setValue(valueTime);

                increaseValue();
            }
            catch (e) {
                setError(true);
            }


        };

            fetchData();

        return () =>
            clearInterval(s)

    }, [error]);

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
    const clockComp =
        <>
            <Clock minuteTime={(valueTime - (Math.floor(valueTime/3600)*3600) - Math.floor(valueTime%60))/60}
                             secondTime={Math.floor(valueTime%60)}
                             hourTime={Math.floor(valueTime/3600)}/>
                             <UncontrolledDropdown direction="right" className="mt-1 text-center">
                                <DropdownToggle caret color="light">
                                    {cityLoc}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem disabled>{`Abbreviation: ${abbre}`}</DropdownItem>
                                    <DropdownItem disabled>{`Date: ${date}`}</DropdownItem>
                                    <DropdownItem disabled>{`Daylight Savings: ${dst}`}</DropdownItem>
                                    <DropdownItem disabled>{`UTC Offset: ${offset}`}</DropdownItem>
                                </DropdownMenu>
                             </UncontrolledDropdown>
        </>
    ;

    // details.push(result.data.datetime.toString().substring(11, 19).split(":"));
    // details.push(result.data.abbreviation.toString());
    // details.push(result.data.datetime.toString().substring(0, 10));
    // details.push(result.data.dst);
    // details.push(result.data.utc_offset);

    const loadingComp = <h4>Loading...</h4>;

    return(
        <div>
            <div className="mb-2">
                {error ? <ModalError refresh={handleRefresh}/> : (isLoading ? loadingComp : clockComp)}
            </div>
        </div>
    )
}

export default Watch;

//http://worldtimeapi.org/api/timezone