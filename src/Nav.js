import React, {useState} from 'react';
import {Navbar, NavbarToggler, NavItem, Nav, Collapse, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import {location_list} from "./Location_list";
import $ from 'jquery'

function Navigation() {

    const [isOpen, SetIsOpen] = useState(false);
    const [isOpen_two, SetIsOpen_two] = useState("none");
    var [value, setValue] = useState("");

    $(document).ready(function () {
        const search_button = $('.search_button');
        const search_input = $('#search_input');

        search_button.click(
            function () {
                // $('#search_input').val(search_button.value);
                // console.log(f);
            }
        );

        search_input.focus(function () {
            SetIsOpen_two("flex");
        });

        search_input.blur(function () {
            SetIsOpen_two("none");
        });
    });

    const toggle = () => SetIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <Link to="/" className="navbar-brand">
                World Clock
            </Link>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Input type="search" placeholder="Search Location" id="search_input" onChange={e => {
                        setValue(e.target.value.split(' ').join('_').toLowerCase());
                    } }/>
                    <form className="drop-div" style={{display: isOpen_two}}>
                        {location_list.map((item, key) => {
                                if (item.toLowerCase().includes(value) && value !== item.toLowerCase()) {
                                    return <button className="btn btn-outline-dark search_button" key={key}>{item}</button>

                                }
                            }
                        )}
                    </form>
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