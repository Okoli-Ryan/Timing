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
                    <NavLink><Link to="/about">
                        About
                    </Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/time">
                        Stopwatch
                    </Link>
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;