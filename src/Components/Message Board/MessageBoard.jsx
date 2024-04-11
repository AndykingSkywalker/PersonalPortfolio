import CreateMessage from "./CreateMessage";

function MessageBoard() {

    return ( 
        <div>
            <h2 style={{textAlign: "center", marginTop: "1rem"}}>Like what you've seen? Why not leave a comment using my message board</h2>
            <CreateMessage/>
        </div>
     );
}

export default MessageBoard;