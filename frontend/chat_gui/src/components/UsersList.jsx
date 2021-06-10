import React from "react"
import ReactDOM from "react-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Messages from "./Messages"

function UsersList(){

    return(
        <Tab.Container className="my-users-list"  defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup >
        <ListGroup.Item action href="#General">
          Public Chat Room
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
        clerkish_richard
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
        peaceful_dish
        </ListGroup.Item>
        <ListGroup.Item action href="#link4">
        unreined_domain
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content >
        <Tab.Pane  eventKey="#General">
          <Messages/>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <Messages/>
        </Tab.Pane>
      </Tab.Content>
    </Col> 
  </Row>
</Tab.Container>
    );
}

export default UsersList;