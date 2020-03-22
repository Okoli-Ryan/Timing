import React, {useContext, useState, useRef} from 'react';
import {Col, Nav} from "reactstrap";
import Watch from "./Watch";
import {CityLocation} from './App';
import ModalEx from './Modal';

export default function WatchGroup() {

    const a = useRef(0);

    const dispatch = useContext(CityLocation);

    var [val, set] = React.useState(0);

    const [cityLoc, setCityLoc] = useState(dispatch.city)

    const [modalShow, setModalShow] = useState(false);

    const toggleModal = () => {
        setModalShow(!modalShow);

        if(modalShow === false)
            setCityLoc(dispatch.city);
    };


    React.useEffect(() => {
        if(a.current !== 0) {
            toggleModal();
        }
        a.current++;
    }, [dispatch.city]);


    const times = ["8-3-2-Africa/Lagos", "4-3-3-Etc/UTC"];


    React.useEffect(() => {

        setInterval(() => set(val++), 1000);

        // return clearInterval(s);
    }, []);

    return (
        <>
            {modalShow && <ModalEx appear={toggleModal} cityLoc={cityLoc}/>}

            {times.map((item, key) =>
            <Col key={key}>
                <Watch
                    secondTime={item.split("-")[2]} minuteTime={item.split("-")[1]} hourTime={item.split("-")[0]} cityLoc={item.split("-")[3]}
                />
            </Col>
        )}
    </>
    );

}