import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";
import axios from 'axios'

const Newstd = () => {
    const [addUser, setaddUser] = useState({
        name: "",
        branch:"",
        year:"",
        gender:"",
        phone: "",
        email: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setaddUser({ ...addUser, [name]: value });
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const added = {
            name:addUser.name,
            branch:addUser.branch,
            year:addUser.year,
            gender:addUser.gender,
            phone:addUser.phone,
            email:addUser.email
            
        }
        try{
            await axios.post('http://localhost:5000/newstd', added);
            alert("data insert successfull");
            setaddUser({ name: "", branch: "", year:"", gender:"", email: "", phone: "" });

        } catch(err){
            
            const msg = err.response ? err.response.data.message : err
            alert.show(msg, {type: "error"})
        }
          
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" value={addUser.name} onChange={handleInput}
                        name="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" value={addUser.branch} onChange={handleInput}
                        name="branch" placeholder="Enter Branch" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" value={addUser.year} onChange={handleInput}
                        name="year" placeholder="Enter year" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        id="formHorizontalRadios1"
                        value="male"
                        onChange={handleInput}
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        id="formHorizontalRadios2"
                        value="female"
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className="w-25" size="sm" type="tel" value={addUser.phone} onChange={handleInput}
                        name="phone" placeholder="Enter Phone number" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="w-25" size="sm" type="email" value={addUser.email} onChange={handleInput}
                        name="email" placeholder="Enter email" />
                </Form.Group>

                
               
                <Button className="mb-3 mt-4 mx-4" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Newstd;