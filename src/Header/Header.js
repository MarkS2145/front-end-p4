import React, { Component } from 'react';

//Additonal Navbar componts:  NavDropdown, Form, FormControl, Button, Card, ListGroup, ListGroupItem
import { Navbar, Nav  } from "react-bootstrap"; //Button,
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

require('dotenv').config()

class Header extends Component {


    render() {
        // console.log("Header here:")

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <img className='Navbar-Image'
                        src="app_image.jpeg"
                        width="40"
                        height="40"
                        alt="Tracker App Logo"
                    />
                    <Navbar.Brand href="#home">Tracker</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Header