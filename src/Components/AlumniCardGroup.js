import React, { useContext, useState, useEffect } from 'react';
import AlumniCard from './AlumniCard';
import Row from 'react-bootstrap/Row'
import getAlumniData from '../data/AlumniData';
import { FilterContext } from '../data/FilterContext';
import '../Styles/AlumniCardGroup.css';

const AlumniCardGroup = () => {
    const [alumniData, setAlumniData] = useState([])
    const [filter] = useContext(FilterContext)

    useEffect(() =>  {
        getAlumniData().then(data => setAlumniData(data))
    }, [])
    
    function filterCards(alumni) {
        
        function filterString(x) {
            return filteredAlumni.filter(person => person[x].toLowerCase().includes(filter[x].toLowerCase()))
        }
        var filteredAlumni = alumni

        filteredAlumni = filterString("name")
        filteredAlumni = filterString("major")
        filteredAlumni = filterString("state")
        // filteredAlumni = filterString("sport")

        filteredAlumni = filteredAlumni.filter(person => {
            if(person instanceof Array) {
                person.forEach(sport => {
                    if(sport.toLowerCase().includes(filter['sport'].toLowerCase())) {
                        return person
                    }
                });
            }
            else {
                person['sport'].toLowerCase().includes(filter['sport'].toLowerCase())
            }
        })

        if(filter.classAfter !== ""){
            filteredAlumni = filteredAlumni.filter(person => person.class >= parseInt(filter.classAfter))
        }
        if(filter.classBefore !== "") {
            filteredAlumni = filteredAlumni.filter(person => person.class <= parseInt(filter.classBefore))            
        }

        return filteredAlumni
    }
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