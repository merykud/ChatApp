import React from "react"
import ReactDOM from "react-dom"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

function Messages(){

    var username = "slouchy_thread";
    var messages = "Hello everyone!";
    var message2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada ex eget quam vehicula finibus. Nullam consectetur ex nisi, in cursus lorem sollicitudin eu. Nunc in erat libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec pharetra dolor. Ut dapibus vestibulum mauris, rhoncus varius eros. Aliquam erat volutpat. Cras vulputate diam orci, auctor semper tellus tempus a. Vestibulum malesuada, augue ac luctus aliquam, sem mi viverra mi, in pellentesque quam nisl non diam. Mauris et tempor dolor. Vivamus in erat commodo, euismod massa eget, porta odio."

    return(
      <div>
        <div className="chatbox">
        
            <p> 
            <h7  className="username-h7"> {username}:</h7> 
            <br/>
            <h7 className="text-message"> {messages}  </h7>
            <br/>

            <h7 className="username-h7"> {username}:</h7> 
            <br/>
            <h7 className="text-message"> {message2}  </h7>
            <br/>

            <h7 className="username-h7"> {username}:</h7> 
            <br/>
            <h7 className="text-message"> {messages}  </h7>
            <br/>

            <h7 className="username-h7"> {username}:</h7> 
            <br/>
            <h7 className="text-message"> {message2}  </h7>
            <br/>
             
            
            
            </p>
           
        </div>

          <InputGroup className="mb-3 my-message-placeholder">
            <FormControl
                placeholder="Type your message here.."
                aria-label="Message"
                aria-describedby="Message"
            />
            <Button id="send-button" variant="outline-secondary">Send</Button>
        </InputGroup>
      </div>
       
    );
}

export default Messages;