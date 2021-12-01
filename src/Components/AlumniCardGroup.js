import React, { useContext, useState, useEffect } from 'react';
import AlumniCard from './AlumniCard';
import Row from 'react-bootstrap/Row'
import getUserData from '../data/AlumniData';
import { FilterContext } from '../data/FilterContext';
import '../Styles/AlumniCardGroup.css';

const AlumniCardGroup = () => {
    const [alumniData, setAlumniData] = useState([])
    const [filter] = useContext(FilterContext)

    useEffect(() =>  {
        getUserData(filter).then(data => setAlumniData(data))
    }, [filter])
    
    if(alumniData.length === 0){
        return (
            <div style={{fontSize: "50px", textAlign: "center"}}>
                No Results
            </div>
        )
    }
    return (
        <Row className="alumni-card-group">
            {(alumniData).map((alumni,index) =>
                <AlumniCard key={"alumni"+index} alumni={alumni}/>
            )}
        </Row>
    )
}

export default AlumniCardGroup