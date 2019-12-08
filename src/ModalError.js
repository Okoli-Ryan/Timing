import React from 'react';
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

const ModalError = (props) => {

    // const [refresh, doRefresh] = useState(false);
    // const toggle = () => {
    //     setModal(false);
    //     props.appear();
    // };

    function handle() {
        // window.location.reload();
        props.refresh();
    }

    return (
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Network Error</ModalHeader>
                <ModalBody>
                    <Button onClick={handle}>Click to refresh page</Button>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ModalError;
