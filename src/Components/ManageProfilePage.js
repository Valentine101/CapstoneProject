import React from 'react'
import Table from 'react-bootstrap/Table'
import alumniData from '../data/AlumniData';


const ManageProfilePage = () => {
    return (
        <>
            <Table striped boardered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>Sport</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {alumniData.map((profile) => 
                        <tr>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td>{profile.major}</td>
                            <td>{profile.sport}</td>
                            <td>{profile.city}, {profile.state}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default ManageProfilePage