import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import {Link } from 'react-router-dom'
import './Navbar.css';

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleSelect = () => setExpanded(false);
    return (
        <Navbar bg="light" expand="lg"  expanded={expanded} className="custom-navbar" style={{padding: "10px"}}>
            <Navbar.Brand href="/">
                {/* <img src="/logo.png" alt="MidstreamAI Logo" className="logo" /> */}
                <Link to="/" className="toolbar-link">TG DATA</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={handleToggle}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" onSelect={handleSelect}>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/user">
                        <Nav.Link>User</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/userData">
                        <Nav.Link>UserData</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/client">
                        <Nav.Link>Client</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/configuration">
                        <Nav.Link>Configuration</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/requestCall">
                        <Nav.Link>Request Call</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
