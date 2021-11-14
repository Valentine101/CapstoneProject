import React, { useState } from 'react'
import ProfileRequestData from '../data/ProfileRequestData';
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialIcon } from 'react-social-icons';

const ProfileRequestPage = () => {
    const [show, setShow] = useState(false)
    const open = () => setShow(true)
    const close = () => setShow(false)

    const [selectedProfile, setSelectedProfile] = useState({})

    const approveUser = () => {
        console.log(selectedProfile.name+" was approved")
    }

    const denyUser = () => {
        console.log(selectedProfile.name+" was denied")
    }

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
                    {ProfileRequestData.map((profile,index) => 
                        <tr key={"profile"+index} onClick={() => {open(); setSelectedProfile(profile)}}>
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
                    <Image src={selectedProfile.image ||  "images/missing-photo.jpeg"} height={275} width={275}/>
                    <ProfileReviewModalRow parameter="Email" value={selectedProfile.email}/>
                    <ProfileReviewModalRow parameter="Class" value={selectedProfile.class}/>
                    <ProfileReviewModalRow parameter="Major" value={selectedProfile.major}/>
                    <ProfileReviewModalRow parameter="Sport" value={selectedProfile.sport}/>
                    <ProfileReviewModalRow parameter="Loaction" value={selectedProfile.city+", "+selectedProfile.state}/>
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
                    <Button variant="danger" onClick={() => {close();denyUser()}}>Deny</Button>
                    <Button variant="success" onClick={() => {close();approveUser()}}>Approve</Button> 
                </Modal.Footer>
            </Modal>
        </>
    )
}

const ProfileReviewModalRow = (props) => {
    return (
        <div style={{display: "flex"}}>
            <p style={{fontWeight: "bold", marginRight: "0.4em"}}>{props.parameter}:</p>
            <p>{props.value}</p>
        </div>
    )
}

export default ProfileRequestPage