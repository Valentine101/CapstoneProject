import { React } from 'react';
import AlumniCardGroup from './AlumniCardGroup'
import FilterPills from './FilterPills';

const Body = () => {
    return (
        <div style={{backgroundColor: "grey"}}>
            <FilterPills/>
            <AlumniCardGroup/>
        </div>
    )
}

export default Body