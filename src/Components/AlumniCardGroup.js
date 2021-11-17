import React, { useState, useContext } from 'react';
import AlumniCard from './AlumniCard';
import Row from 'react-bootstrap/Row'
// import alumniData from '../data/AlumniData';
import { FilterContext } from '../data/FilterContext';


const AlumniCardGroup = () => {
    const [filter] = useContext(FilterContext)
    const [alumniData, setAlumniData] = useState([])


    //http://localhost:9000/users?page=3&size=2
    //would return the 5th and 6th result from the sql query
    fetch('http://localhost:9000/users')
        .then(res => res.json())
        // .then(data => obj = data)
        .then(data => setAlumniData(data))
        // .then(() => alumniData = obj)



    function filterCards(alumni) {
        
        function filterString(x) {
            return filteredAlumni.filter(person => person[x].toLowerCase().includes(filter[x].toLowerCase()))
        }
        var filteredAlumni = alumni

        filteredAlumni = filterString("name")
        filteredAlumni = filterString("major")
        filteredAlumni = filterString("state")
        filteredAlumni = filterString("sport")

        if(filter.classAfter !== ""){
            filteredAlumni = filteredAlumni.filter(person => person.class >= parseInt(filter.classAfter))
        }
        if(filter.classBefore !== "") {
            filteredAlumni = filteredAlumni.filter(person => person.class <= parseInt(filter.classBefore))            
        }

        return filteredAlumni
    }
    if(alumniData.length === 0){
    // if(filterCards(alumniData).length === 0){
        return (
            <div style={{fontSize: "50px", textAlign: "center"}}>
                No Results
            </div>
        )
    }
    return (
        <Row>
            {alumniData.map((alumni,index) => 
            // {filterCards(alumniData).map((alumni,index) =>
                <AlumniCard key={"alumni"+index} alumni={alumni}/>
            )}
        </Row>
    )
}

export default AlumniCardGroup