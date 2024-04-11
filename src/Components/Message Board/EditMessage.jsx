import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";

function EditMessage() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:8082/message/get/" + params.id)
        .then((response) => {
            console.log(response);
            setUsername(response.data.username)
            setMessage(response.data.message)
            setImageUrl(response.data.imageUrl)
        }).catch((err) => console.error(err))
    }, []);


    function updateMessage(){
        axios.put("http://localhost:8082/message/update/" + params.id, {
            username,
            message,
            imageUrl
        })
        .then((response) => navigate(-1))
        .catch((err) => console.error(err));
    }

    return ( 
        <div>
        <div>
 <h1 style={{ textAlign: "center", justifyContent: "center" }}>
   Leave a message &nbsp;
 </h1>
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
     updateMessage();
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
</div>
   </div>
     );
}

export default EditMessage;