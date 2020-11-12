import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <div>
            <Navbar fixed="top" className={classes.Navbar} collapseOnSelect variant="dark" expand="sm">
                <Navbar.Brand className={classes.NavbarLeft} href="/">Reactify</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{marginTop:"0.9px"}} href="/">Home</Nav.Link>
                    </Nav>
                    <Nav className={classes.NavbarRight}>
                        <Nav.Link style={{marginTop:"0.9px"}} href="/">Login/Signup</Nav.Link>
                        <Nav.Link style={{marginTop:"0.9px"}} eventKey={2} href="/">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navbar;