import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Badge from 'react-bootstrap/Badge';
import Login from './Login'
import FilterModal from './FilterModal'
import AlumniFormModal from './AlumniFormModal';
import { PageContext } from '../data/PageContext';
import ProfileRequestData from '../data/ProfileRequestData';

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
                        <NavDropdown.Item onClick={() => {setPage("profile requests")}}>
                            Profile Requests
                            {ProfileRequestData.length > 0 && <Badge style={{marginLeft: "1em"}} bg="danger" pill>{ProfileRequestData.length}</Badge>}
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setPage("data")}>Data</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setPage("manage profiles")}>Manage Profiles</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Login/>
            </Container>
        </Navbar>
    )
}

export default Header