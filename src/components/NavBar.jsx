import { useState } from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import About from '../pages/About.jsx';
import './NavBar.css';
import React from 'react';

function NavBar(){
    

    return (
        <>
            <Navbar data-bs-theme="dark" expand="lg" className="w-100 home-navbar" fixed="top" height="100px">
                <Container fluid>
                    <Nav className="nav-title" as={Link} to="/"> STET Lab</Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto home-nav-links nav-tags">
                            <Nav.Link as={Link} to="/about-us" className="nav-tag">About</Nav.Link>
                            <Nav.Link as={Link} to="/projects" className="nav-tag">Research/Projects</Nav.Link>
                            <Nav.Link as={Link} to="/research-team" className="nav-tag">People</Nav.Link>
                            <Nav.Link as={Link} to="/publications" className="nav-tag">Publications</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us" className="nav-tag">Opportunities/Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;