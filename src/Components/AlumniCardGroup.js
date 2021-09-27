import { React } from 'react';
import AlumniCard from './AlumniCard';
import Row from 'react-bootstrap/Row'
import alumniData from '../data/AlumniData';

const AlumniCardGroup = () => {
    return (
        <Row>
            {alumniData.map((alumni) =>
                <AlumniCard alumni={alumni}/>
            )}
        </Row>
    )
}

export default AlumniCardGroup