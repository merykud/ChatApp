import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import EnterNote from './EnterNote';
import Footer from './Footer';
import Header from './Header';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Messages from './Messages';
import HeaderExit from './HeaderExit';
import Greeting from './Greeting'
import UsersList from './UsersList'

function App(){
    return ( 
   <Router>
         <Container fluid className="main-container">
            
            <Switch>

                <Route exact path="/">
                    <Header/>
                    <EnterNote/>
                </Route>

                <Route path="/general_chatroom">
                    <HeaderExit/>
                    <Greeting/>
                    <UsersList/>
                    
                </Route>

            </Switch>
            <Row className="justify-content-center">
                <Col className="col-sm-4">
                    <Footer/>
                </Col>
            </Row>
        </Container>
    </Router>
        
    );
}

export default App;