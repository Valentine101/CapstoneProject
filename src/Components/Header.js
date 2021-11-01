import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import LoginBttn from './LoginBttn'
import LogoutBttn from './LogoutBttn'
import FilterModal from './FilterModal'
import AlumniFormModal from './AlumniFormModal';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >Soaring Eagles</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                <Nav>
                    <FilterModal/>
                    <AlumniFormModal/>
                </Nav>
                </Navbar.Collapse>
                <LoginBttn/>
                <LogoutBttn/>
            </Container>
        </Navbar>
    )
}

export default Header