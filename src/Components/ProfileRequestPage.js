import React, { useState } from 'react'
import ProfileRequestData from '../data/ProfileRequestData';
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialIcon } from 'react-social-icons';

const ProfileRequestPage = () => {
    const [show, setShow] = useState(false)
    const open = () => setShow(true)
    const close = () => setShow(false)

    const [selectedProfile, setSelectedProfile] = useState({})

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
                    </tr>
                </thead>
                <tbody>
                    {ProfileRequestData.map((profile) => 
                        <tr onClick={() => {open(); setSelectedProfile(profile)}}>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td>{profile.major}</td>
                            <td>{profile.sport}</td>
                            <td>{profile.city}, {profile.state}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProfile.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedProfile.email}</p>
                    <p>{selectedProfile.class}</p>
                    <p>{selectedProfile.major}</p>
                    <p>{selectedProfile.sport}</p>
                    <p>{selectedProfile.city}, {selectedProfile.state}</p>
                    {selectedProfile.medias && <h3>Social Links</h3>}
                    {selectedProfile.medias && selectedProfile.medias.map((media, index) =>
                        <Row key={"media"+index}>
                            <Col sm={2}>
                                <SocialIcon url={media}/>
                            </Col>
                            <Col>
                                <h5>{media}</h5>
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>
                    <Button variant="danger">Deny</Button>
                    <Button variant="success">Approve</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProfileRequestPage