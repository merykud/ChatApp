import ReactDOM from "react-dom"
import react from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/esm/Container"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {Link} from "react-router-dom"

function EnterNote(){
    return(

        <Row className="justify-content-center">
                <Col className="col-sm-8">
                     <Jumbotron fluid id="jumbotron">
                        <Container >
                            <h1>Welcome 💬</h1>
                            <p>Connect with people worldwide.</p>
                            <Link to="/general_chatroom">
                                <Button id="enter-button" variant="primary">Enter a chat room</Button>
                            </Link>
                        </Container>
                    </Jumbotron>
                </Col>
        </Row>


        

    );

}

export default EnterNote;

