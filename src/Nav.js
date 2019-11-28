import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

function Navigation() {
    
    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => SetIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <Link to="/">
                <NavbarBrand>
                    React
                </NavbarBrand>
            </Link>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/countdown"><NavLink>
                        Countdown
                    </NavLink></Link>
                </NavItem>
                <NavItem>
                        <Link to="/time">
                            <NavLink>
                        Stopwatch
                            </NavLink>
                    </Link>

                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;