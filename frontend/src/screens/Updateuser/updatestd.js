import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";
import { useLocation, useParams } from 'react-router-dom';

const Updatestd = (props) => {

    const {type} = useParams;
    const stateParamVal = useLocation.state.stateParam;
    console.log(type);
    console.log(stateParamVal);
    const location = useLocation();

    // const [oldUser, setoldUser] = useState({
    //     console.log(location.state.uid.name);
    //     name: location.state.uid.name
    //     branch:"",
    //     year:"",
    //     gender:"",
    //     phone: "",
    //     email: ""
    // });
//value={oldUser.name}
    return (
        <>
            <Form>
                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" placeholder="Enter name"/>
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" placeholder="Enter Branch" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Control className="w-25" size="sm" type="text" placeholder="Enter year" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        id="formHorizontalRadios2"
                    />
                    
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className="w-25" size="sm" type="tel" placeholder="Enter Phone number" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4 mx-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="w-25" size="sm" type="email" placeholder="Enter email" />
                </Form.Group>

                
               
                <Button className="mb-3 mt-4 mx-4" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Updatestd;