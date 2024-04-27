import axios from "axios";
import { useState , useEffect } from "react";
import MessageStructure from "./MessageStructure";

function CreateMessage() {

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [messages, setMessages] = useState([]);

    function getMessages() {
        
            axios.get("http://localhost:8082/message/get")
            .then((response) => {
                setMessages(response.data)
            })
            .catch((err) => console.error(err));
            
        }
        
        useEffect(() => {
            getMessages();
        }, []);
        
        
        function createMessage() {
            axios.post("http://localhost:8082/message/create", {
                username,
                message,
                imageUrl
            })
            .then((response) => {
                console.log(response);
                
                setUsername("");
                setMessage("");
                setImageUrl("");
                getMessages();
            })
            .catch((err) => console.error(err));
        } 
        
        const newMessages = [];
        
        for(let m of messages) {
            newMessages.push(
                <MessageStructure
                key={m.id + m.message}
                id={m.id}
                username={m.username}
                message={m.message}
                imageUrl={m.imageUrl}
                getMessages={getMessages}
                />
            );
        }


    return ( 
        <div>
             <div>
    <br />
      <form
        style={{
          margin: "auto",
          fontSize: "20px",
          backgroundColor: "#243D72",
          padding: "24px",
          borderRadius: "10%",
          maxWidth: "42rem",
          fontWeight: "bold",
          color: "white"
        }}
        onSubmit={(e) => {
          e.preventDefault();
          createMessage();
        }}
      >
        <label htmlFor="username">Username </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="itemName"
          type="text"
          className="form-control"
          aria-label="Item Name"
          required
        />
        <br />
        <label htmlFor="message">Your Message: </label>
        <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="w3review" name="w3review" rows="4" cols="65">
        
        </textarea>
        
        <br />
        <label htmlFor="username">Image Url: </label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          id="itemName"
          type="text"
          className="form-control"
          aria-label="Item Name"
        />
        <br />
        <button
          style={{ marginLeft: "15rem"}}
          type="submit"
          className="btn btn-success btn-lg"
        >
          Submit
        </button>
      </form>
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">{newMessages}</div>
    </div>
        </div>
     );
}

export default CreateMessage;