import React, { useState, useContext } from 'react';
import { FilterContext } from '../data/FilterContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import SportData from '../data/SportData';
import MajorData from '../data/MajorData'
import StateData from '../data/StateData'

const FilterModal = () => {
    
    const [filter, setFilter] = useContext(FilterContext)
    const [show,setShow] = useState(false)
    const [inputs, setInputs] = useState({filter});
    const close = () => setShow(false)
    const open = () => setShow(true)

    var classYears = []
    for(var i = new Date().getFullYear(); i >= 1920; i--){
        classYears.push(i)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const applyFilters = () => {
        var newFilter = {...filter}
        newFilter.name = inputs.name || filter.name
        newFilter.sport = inputs.sport || filter.sport
        newFilter.major = inputs.major || filter.major
        newFilter.beforeClass = inputs.beforeClass || filter.beforeClass
        newFilter.afterClass = inputs.afterClass || filter.afterClass
        newFilter.state = inputs.state || filter.state
        setInputs({})
        setFilter(newFilter)
    }

    return (
        <>
            <Nav.Link onClick={open}>Filter</Nav.Link>
            <Modal show={show} onHide={close}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Filter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            defaultValue={filter.name}
                            placeholder='Name'
                            name='name'
                            onChange={handleChange}
                        />
                        <Form.Label>Sport</Form.Label>
                        <Form.Select defaultValue={filter.sport} name="sport" onChange={handleChange}>
                            <option value={""}>Sport</option>
                            {SportData.map((sport) =>
                                <option value={sport} key={sport}>{sport}</option>
                            )}
                        </Form.Select>
                        <Form.Label>Major</Form.Label>
                        <Form.Select defaultValue={filter.major} name="major" onChange={handleChange}>
                            <option value={""}>Major</option>
                            {MajorData.map((major) =>
                                <option value={major} key={major}>{major}</option>
                            )}
                        </Form.Select>
                        <Form.Label>Class</Form.Label>
                        <Row>
                            <Col>
                                <Form.Label>After</Form.Label>
                                <Form.Select defaultValue={filter.afterClass} name="afterClass" onChange={handleChange}>
                                    <option value={""}>Year</option>
                                    {classYears.map((year) =>
                                        <option value={year} key={year}>{year}</option>
                                    )}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Before</Form.Label>                                    <Form.Select defaultValue={filter.beforeClass} name="beforeClass" onChange={handleChange}>
                                    <option value={""}>Year</option>
                                    {classYears.map((year) =>
                                        <option value={year} key={year}>{year}</option>
                                    )}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue={filter.state} name="state" onChange={handleChange}>
                            <option value={""}>State</option>
                            {StateData.map((state) =>
                                <option value={state} key={state}>{state}</option>
                            )}
                        </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {close(); applyFilters()}}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>                
            </Modal>
        </>
    )
}

export default FilterModal