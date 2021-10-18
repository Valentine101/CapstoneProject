import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import LoginBttn from './LoginBttn'
import LogoutBttn from './LogoutBttn'

const pages = ["Home","Search"]

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >Alumni Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                <Nav>
                    {pages.map((page) => 
                        <Nav.Link key={page}>{page}</Nav.Link>
                    )}
                </Nav>
                </Navbar.Collapse>
                <LoginBttn/>
                <LogoutBttn/>
            </Container>
        </Navbar>
    )
}

export default Header