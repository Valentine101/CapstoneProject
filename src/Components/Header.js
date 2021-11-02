import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LoginBttn from './LoginBttn'
import LogoutBttn from './LogoutBttn'
import FilterModal from './FilterModal'
import AlumniFormModal from './AlumniFormModal';
import { PageContext } from '../data/PageContext';

const Header = () => {
    const [page, setPage] = useContext(PageContext)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => {setPage("home")}}>Soaring Eagles</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link onClick={() => {setPage("home")}}>Home</Nav.Link>
                    <FilterModal/>
                    <AlumniFormModal/>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item onClick={() => {setPage("profile requests")}}>Profile Requests</NavDropdown.Item>
                        <NavDropdown.Item>Data</NavDropdown.Item>
                        <NavDropdown.Item>Manage Profiles</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <LoginBttn/>
                <LogoutBttn/>
            </Container>
        </Navbar>
    )
}

export default Header