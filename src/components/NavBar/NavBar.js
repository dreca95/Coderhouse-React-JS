import React from 'react'
import prrLogo from './prrLogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">


                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto">
                        <img src={prrLogo} width="50"
                            height="50" className="d-inline-block align-top" alt="logo"></img>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>


                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Navbar.Brand>
        </Navbar>
    )



}