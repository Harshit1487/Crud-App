import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Table, CloseButton} from "react-bootstrap";
const Deletestd = () => {

    const deletev = (id) =>{
        axios.delete(`http://localhost:5000/delete/${id}`)
    };

    const [view, setView] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:5000/read')
        .then((res) => {setView(res.data)})
        .catch(error => console.log(error,"data fetch nhi ho raha..."));
    }, []);

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Year</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {view.map((val, key)=>(
                            <tr>
                            {/* <td>1</td> */}
                            <td>{val.name}</td>
                            <td>{val.branch}</td>
                            <td>{val.year}</td>
                            <td>{val.gender}</td>
                            <td>{val.phone}</td>
                            <td>{val.email}</td>
                            <td><CloseButton onClick={()=> deletev(val._id)} /></td>
                        </tr>
                    ))} 
                    
                </tbody>
            </Table>
        </>
    );
};

export default Deletestd;