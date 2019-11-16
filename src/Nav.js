import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, Collapse} from 'reactstrap';

function Navigation() {
    
    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => SetIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                React
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/about">
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/time">
                        Stopwatch
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;