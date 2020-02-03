import React, {useState, useEffect} from 'react';
import Clock from "./Clock";
import axios from 'axios';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import ModalError from './ModalError';

function Watch(props){

    var {cityLoc} = props;

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
                console.log("start");
                const result = await axios(
                    `https://worldtimeapi.org/api/timezone/${cityLoc}`,
                );
                //
                setAbbre(result.data.abbreviation.toString());
                setDate(result.data.datetime.toString().substring(0, 10));
                setDST(result.data.dst);
                setOffset(result.data.utc_offset);
                setIsLoading(false);

                // increaseValue();
            }
            catch (e) {
                setError(true);
            }


        };

            fetchData();

    }, [cityLoc]);


    //
    const clockComp =
        <>
            <Clock
                minuteTime={new Date().getMinutes()}
                             secondTime={new Date().getSeconds()}
                             hourTime={
                                 (new Date().getHours() + parseInt(offset.toString().substring(0, 3)) - 1)%24
                             }/>
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
