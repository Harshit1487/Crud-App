import React from 'react'
import {Nav, Navbar, Container} from "react-bootstrap";

const Header = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Student</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/newstd">New User</Nav.Link>
                        <Nav.Link href="/viewstd">View User</Nav.Link>
                        <Nav.Link href="/updatestd">Update User</Nav.Link>
                        <Nav.Link href="/deletestd">Delete User</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
           
        </>

    );
};

export default Header;