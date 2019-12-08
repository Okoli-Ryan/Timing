import React, {useState} from 'react';
import {Navbar, NavbarToggler, NavItem, Nav, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import {location_list} from "./Location_list";
import ModalEx from './Modal'
import Select from 'react-select';

function Navigation() {

    const [isOpen, SetIsOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [cityLoc, setCityLoc] = useState("Africa/Lagos");

    const options = location_list
        .map((item) => ({
            value: item,
            label: item
        }));

    const toggle = () => SetIsOpen(!isOpen);
    const toggleModal = (v) => {
        setModalShow(!modalShow);

        if(modalShow === false)
            setCityLoc(v.value);


    };

    return (
        <Navbar color="dark" dark expand="md">
            <Link to="/" className="navbar-brand">
                World Clock
            </Link>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem id="select">
                            <Select options={options} onChange={toggleModal}/>
                    </NavItem>
                    <NavItem>
                        {modalShow && <ModalEx appear={toggleModal} cityLoc={cityLoc}/>}
                    </NavItem>
                    <NavItem>
                        <Link to="/countdown" className="nav-link">
                            Countdown
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/time" className="nav-link">
                            Stopwatch
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;