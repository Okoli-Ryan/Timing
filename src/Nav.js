import React, {useState, useRef} from 'react';
import {Navbar, NavbarToggler, NavItem, Nav, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import {location_list} from "./Location_list";
import useSelect from './useSelect';


function Navigation() {

    const [isOpen, SetIsOpen] = useState(false);
    const {SelectView} = useSelect();


    const toggle = () => SetIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <Link to="/" className="navbar-brand">
                World Clock
            </Link>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem id="nav-item-select">
                        <SelectView options={location_list}/>
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