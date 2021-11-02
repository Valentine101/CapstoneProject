import React, { useContext } from 'react';
import AlumniCardGroup from './AlumniCardGroup'
import ProfileRequestPage from './ProfileRequestPage';
import FilterPills from './FilterPills';
import { PageContext } from '../data/PageContext';

const Body = () => {
    const [page] = useContext(PageContext)
    
    switch (page) {
        case "home":
            return (
                <div style={{backgroundColor: "grey"}}>
                    <FilterPills/>
                    <AlumniCardGroup/>
                </div>
            )
        case "profile requests":
            return (
                <ProfileRequestPage/>
            )
        default:
    }
}

export default Body