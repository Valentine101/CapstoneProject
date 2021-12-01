import React, { useState, useEffect, useContext } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getAlumniData from '../data/AlumniData';
import { UserContext } from '../data/UserContext';

const ManageProfilePage = () => {
    const [alumniData, setAlumniData] = useState([])
    const [selectedProfile, setSelectedProfile] = useState({})
    const [user] = useContext(UserContext)
    
    const [show, setShow] = useState(false)
    const open = () => setShow(true)
    const close = () => setShow(false)

    const [checked, setChecked] = useState(false)

    const deleteUser = () => {
        const requestBody = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: selectedProfile.email
            })
        }
        fetch('https://soaringeagles.herokuapp.com/deleteUser', requestBody)
        
        setAlumniData(alumniData.filter(alumni => alumni.email !== selectedProfile.email))
    }

    const changeAdmin = () => {
        const index = alumniData.findIndex(alumni => alumni.email === selectedProfile.email)
        var newAlumniData = [...alumniData]
        newAlumniData[index].isAdmin = !alumniData[index].isAdmin
        setAlumniData(newAlumniData)

        const requestBody = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: selectedProfile.email,
                adAdmin: newAlumniData[index].isAdmin
            })
        }
        fetch('https://soaringeagles.herokuapp.com/updateIsAdmin', requestBody)
    }

    useEffect(() =>  {
        getAlumniData().then(data => setAlumniData(data))
    }, [])
    
    return (
        <>
            <Table striped boardered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>Sport</th>
                        <th>Location</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {alumniData.map((profile) => 
                        <tr onClick={() => {setSelectedProfile(profile); setChecked(profile.isAdmin); open()}}>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td>{profile.major}</td>
                            <td>{profile.sport}</td>
                            <td>{profile.city}, {profile.state}</td>
                            <td>{profile.isAdmin ? "Yes" : "No"}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProfile.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Check
                            className="mb-2"
                            label="Admin"
                            checked={checked}
                            disabled={user.email === selectedProfile.email}
                            // Update db table onChange
                            onChange={e => {changeAdmin(); setChecked(e.currentTarget.checked)}}
                        />
                    </Form>
                    <Button 
                        variant="danger" 
                        disabled={user.email === selectedProfile.email} 
                        onClick={() => {close(); deleteUser()}}>
                        Delete Profile
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ManageProfilePage