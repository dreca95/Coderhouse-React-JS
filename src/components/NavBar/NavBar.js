import React from 'react'
import prrLogo from '../prrLogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {CartWidget} from '../CartWidget'
import './navbar.css'

export const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">


                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="options">
                        <img src={prrLogo} width="50"
                            height="50" className="d-inline-block align-top" alt="logo"></img>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>


                    </Nav>

                   <CartWidget/>

                </Navbar.Collapse>
            </Navbar.Brand>
        </Navbar>
    )



}