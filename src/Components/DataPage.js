import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import MajorData from '../data/MajorData';
import SportData from '../data/SportData';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const DataPage = () => {
    return(
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="majors">
                <Row>
                    <Col sm={2}>
                    <Nav variant="table" className="flex-column" defaultActiveKey="majors">
                        <Nav.Item>
                            <Nav.Link eventKey="majors">Majors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sports">Sports</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="majors">
                            <DataTable title="Majors" data={MajorData}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sports">
                            <DataTable title="Sports" data={SportData}/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

const DataTable = (props) => {
    const [show, setShow] = useState(false)
    const open = () => setShow(true)
    const close = () => setShow(false)

    
    return (
        <>
            <Table striped boardered hover>
                <thead>
                    <tr>
                        <th>
                            <Row>
                                <Col sm={11}>
                                    {props.title}
                                </Col>
                                <Col sm={1}>
                                    <Button onClick={open}>Add</Button>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((major) =>
                        <tr>
                            <td>
                                <Row>
                                    <Col sm={11}>
                                        {major}
                                    </Col>
                                    <Col sm={1}>
                                        <Button className="btn-sm" variant="danger">X</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {"Add " + props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control className="mb-3"/>
                        <Form.Control className="mb-3"/>
                        <Form.Control className="mb-3"/>
                        <Form.Control className="mb-3"/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DataPage