import { React } from 'react';
import AlumniCardGroup from './AlumniCardGroup'
import Filter from './Filter'

const Body = () => {
    return (
        <div style={{backgroundColor: "grey"}}>
            <Filter/>
            <AlumniCardGroup/>
        </div>
    )
}

export default Body