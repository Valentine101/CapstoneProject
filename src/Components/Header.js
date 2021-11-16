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
import Image from 'react-bootstrap/Image';
import '../Styles/GSColors.css'

const Header = () => {
    const [page, setPage] = useContext(PageContext)

    return (
        <Navbar className="gs-background-blue" expand="lg">
            <Container>
                <Image src={'images/gs-logo.png'} width={'70'}onClick={() => {setPage("home")}}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link onClick={() => {setPage("home")}}>Home</Nav.Link>
                    <FilterModal/>
                    <AlumniFormModal/>
                    <Nav.Link href="https://gseagles.com/calendar" target="_blank">Calendar</Nav.Link>
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