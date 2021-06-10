import React from "react"
import ReactDOM from "react-dom"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/Row"


function Header(){
    return(

        <Row>
            <Col>
                <Navbar expand="lg" id="my-navbar">
               
               <Navbar.Brand id="logo">Chat App</Navbar.Brand>
               
                </Navbar>
            </Col>
        </Row>
            
         
    );
}

export default Header;