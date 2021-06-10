import ReactDOM from 'react-dom'
import react from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Greeting(){
    
    var Sentencer = require('sentencer');
    var randAdjective = Sentencer.make("{{adjective}}");
    var randNoun = Sentencer.make("{{noun}}");
    var username = randAdjective+"_"+randNoun

    return(
        <Row>
            <Col className="col-sm-12 message-row">
                 <h2>Hello, {username} 👋🏼</h2>
            </Col>
        </Row>
        

    );
}

export default Greeting;