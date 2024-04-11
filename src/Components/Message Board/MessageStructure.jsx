import  axios  from "axios";
import { useNavigate } from "react-router-dom";

function MessageStructure(props) {

    const navigate = useNavigate();

    const deleteMessage = () => {
        axios.delete(`http://localhost:8082/message/remove/${props.id}`)
        .then((response) => {
            console.log(response);
            props.getMessages();
        })
        .catch((err) => console.error(err));
    };

    const handleEdit = () => {
        navigate("/EditMessage/" + props.id);
    };

    return ( 
        <div>
            <div class="card">
  <div class="card-header" style={{display: "flex", alignItems: "center", fontWeight: "bold", backgroundColor: "lightblue"}}>
   <div className="usernameStuff"> {props.username}</div>
    <div style={{display: "flex", flex: "space-between" }}>
    <button style={{marginLeft: "1rem"}} onClick={handleEdit} className="btn btn-primary"> Edit Message </button>
    <button style={{marginLeft: "1rem"}} onClick={deleteMessage} className="btn btn-danger"> Delete Message </button>
    </div>
  </div>
  <div class="card-body">
    <p class="card-text">{props.message}</p>
    <div>
        <img class="imgEnlarger" style={{marginLeft: "3rem", width: "18rem", height: "13rem"}} src={props.imageUrl} alt="" />
    </div>
  </div>
</div>
        </div>
     );
}

export default MessageStructure;