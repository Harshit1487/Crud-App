import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import {Table, Button} from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
const Viewstd = () => {

    const [view, setView] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:5000/read') 
        .then(res => setView(res.data))
        .catch(error => console.log(error,"data fetch nhi ho raha..."));
    },[]);


    const enterval = (id) =>{
        <Link to = {{
            pathname: "/updatestd/id",
            state: {stateParam: true}
        }}></Link>
    }

    return (
        <>
            
             <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Year</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                 {view.map((val, key)=>(
                            <tr>
                            <td>1</td>
                            <td>{val.name}</td>
                            <td>{val.branch}</td>
                            <td>{val.year}</td>
                            <td>{val.gender}</td>
                            <td>{val.phone}</td>
                            <td>{val.email}</td>
                            <td><Button onClick={() => {enterval(val._id)}} variant="light">Update</Button></td>
                        </tr>
                    ))} 
                </tbody>
            </Table>
        </>
    );
};

export default Viewstd;