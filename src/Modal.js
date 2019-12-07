import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Watch hourTime={12} minuteTime={13} secondTime={24} cityLoc="San Francisco"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

    export default ModalEx;