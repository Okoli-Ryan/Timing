import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Watch from './Watch'

const ModalEx = (props) => {

    const [modal, setModal] = useState(true);

    const toggle = () => {
        setModal(false);
        props.appear();
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{`${props.cityLoc} details`}</ModalHeader>
                <ModalBody>
                    <Watch cityLoc={props.cityLoc}/>
                </ModalBody>
            </Modal>
        </div>
    );
};

    export default ModalEx;
