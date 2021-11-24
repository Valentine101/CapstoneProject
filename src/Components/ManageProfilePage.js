import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getAlumniData from '../data/AlumniData';


const ManageProfilePage = () => {
    const [alumniData, setAlumniData] = useState([])
    const [selectedProfile, setSelectedProfile] = useState({})
    
    const [show, setShow] = useState(false)
    const open = () => setShow(true)
    const close = () => setShow(false)

    const [checked, setChecked] = useState(false)

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
                            // Update db table onChange
                            onChange={e => setChecked(e.currentTarget.checked)}
                        />
                    </Form>
                    <Button variant="danger">Delete Profile</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ManageProfilePage