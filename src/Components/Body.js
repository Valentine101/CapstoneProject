import React, { useContext } from 'react';
import AlumniCardGroup from './AlumniCardGroup'
import ProfileRequestPage from './ProfileRequestPage';
import DataPage from './DataPage'
import FilterPills from './FilterPills';
import { PageContext } from '../data/PageContext';
import ManageProfilePage from './ManageProfilePage';

const Body = () => {
    const [page] = useContext(PageContext)
    
    switch (page) {
        case "home":
            return (
                <div>
                    <FilterPills/>
                    <AlumniCardGroup/>
                </div>
            )
        case "profile requests":
            return (
                <>
                    <h1>{page.toUpperCase()}</h1>
                    <ProfileRequestPage/>
                </>
            )
        case "data":
            return (
                <>
                    <h1>{page.toUpperCase()}</h1>
                    <DataPage/>
                </>
            )
        case "manage profiles":
        return (
            <>
                <h1>{page.toUpperCase()}</h1>
                <ManageProfilePage/>
            </>
        )
        default:
    }
}

export default Body