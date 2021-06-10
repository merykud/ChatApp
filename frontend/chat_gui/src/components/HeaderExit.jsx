import React from "react"
import ReactDOM from "react-dom"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/Row"
import {Link} from "react-router-dom"


function HeaderExit(){
    return(
          <Row>
               <Col className="col-6">
                    <Navbar.Brand id="logo">Chat App</Navbar.Brand>
               </Col>
               <Col className="exit-button-col">
               <Link to="/">
                    <Button id="exit-button" variant="primary">Exit</Button>          
               </Link>

                    
               </Col>
            </Row>

    
    );
}

export default HeaderExit;