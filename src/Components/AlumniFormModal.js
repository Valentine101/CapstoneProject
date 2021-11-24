import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav  from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SportData from '../data/SportData';
import MajorData from '../data/MajorData';
import StateData from '../data/StateData';
import { UserContext } from '../data/UserContext';

const AlumniFormModal = (props) => {
    const [user] = useContext(UserContext)
    const [validated, setValidated] = useState(false)
    const [show,setShow] = useState(false)

    const close = () => {
        setValidated(false)
        setShow(false)
    }
    const open = () => setShow(true)

    const [socials, setSocials]= useState(
        user.socials ? user.socials.map(social => {
            return {social: social}
        }) 
        : [{social: ""}]
    )
    
    const addSocialRow = () => {
        if(socials.length < 8) {
            var newSocials = [...socials]
            newSocials.push({social: ""})
            setSocials(newSocials)
        }
    }

    const removeSocialRow = (social) => {
        if(socials.length > 1) {
            var newSocials = [...socials]
            newSocials.splice(social,1)
            setSocials(newSocials)
        }
    }

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        
        for (let i = 0; i < socials.length; i++) {
            if(i === Number(name.split('')[6])) {
                var newSocials = [...socials]
                newSocials[i].social = value
                setSocials(newSocials)
            }
        }
    }    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            close()
            const medias = []
            for(const x in inputs) {
                if(x.includes("social")) {
                    medias.push(inputs[x])
                }
            }
            // TODO: update profile request db table
            console.log({
                name: inputs.name,
                class: inputs.class,
                sport: inputs.sport,
                // image does not do anything right now
                // image: "",
                city: inputs.city,
                state: inputs.state,
                major: inputs.major,
                medias: medias
            })

            //fetch call localhost:9000/createUser
            /*
            const requestBody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "googleId" : ,
                    "id" : ,
                    "name" : ,
                    "email" : ,
                    "year" : ,
                    "major" : {},
                    "sport" : {},
                    "city" : ,
                    "state" : ,
                    "image" : ,
                    "socials" : {}
                })
            };
            
            fetch('http://localhost:9000/createUser', requestBody)
                .then(res => res.json())
                // .then(data => obj = data)
                //.then(data => setAlumniData(data))
                .then(data => console.log(data))
            */

            return
        }
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);



    }

    return(
        <>
            <Nav.Link onClick={open}>{user.name ? 'Edit Profile' : 'Create Profile'}</Nav.Link>
            <Modal show={show} onHide={close} scrollable size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{user.name ? 'Edit Profile' : 'Create Profile'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate onSubmit={handleSubmit} validated={validated}>
                        <Form.Group className="mb-3">
                            <RequiredLabel label="Name"/>
                            <Form.Control 
                                required
                                defaultValue={inputs.name || user.name}
                                placeholder='Name'
                                name='name'
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your Name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <RequiredLabel label="Email"/>
                            <Form.Control
                                defaultValue={inputs.email || user.email}
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter an Email Address
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <RequiredLabel label="Photo"/>
                            <Form.Control
                                name="photo"
                                onChange={handleChange}
                                type="file"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Upload a Photo
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <RequiredLabel label="Sport"/>
                            <Form.Select
                                defaultValue={inputs.sport} 
                                name="sport" 
                                onChange={handleChange} 
                                required
                            >
                                <option value={""}>Sport</option>
                                {SportData.map((sport) =>
                                    <option value={sport} key={sport}>{sport}</option>
                                )}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please Select a Sport
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <RequiredLabel label="Major"/>
                            <Form.Select
                                defaultValue={inputs.major || user.major} 
                                name="major" 
                                onChange={handleChange}
                                required
                            >
                                <option value={""}>Major</option>
                                {MajorData.map((major) =>
                                    <option value={major} key={major}>{major}</option>
                                )}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please Select a Major
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col sm={9}>
                                    <RequiredLabel label="City"/>
                                    <Form.Control
                                        defaultValue={inputs.city || user.city} 
                                        placeholder='City'
                                        name='city'
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter a City
                                    </Form.Control.Feedback>
                                </Col>
                                <Col sm={3}>
                                    <RequiredLabel label="State"/>
                                    <Form.Select
                                        defaultValue={inputs.state || user.state} 
                                        name="state" 
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value={""}>State</option>
                                        {StateData.map((state) =>
                                            <option value={state} key={state}>{state}</option>
                                        )}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please Select a State
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Label>Socials</Form.Label>
                        {(socials).map((social, index) => 
                            <Row key={"social"+index}>
                                <Col className="mb-2" sm={1}>
                                    <Button variant="danger" onClick={() => removeSocialRow(index)}>-</Button>
                                </Col>
                                <Col sm={11}>
                                    <Form.Control
                                        value={social.social}
                                        placeholder='Social'
                                        name={'social'+index}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                        )}
                        <Button onClick={addSocialRow} className="mb-3">Add</Button>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={close}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

const RequiredLabel = (props) => {
    return (
        <div>
            <Form.Label>{props.label}</Form.Label>
            <Form.Label className="text-danger">*</Form.Label>
        </div>
    )
}

export default AlumniFormModal