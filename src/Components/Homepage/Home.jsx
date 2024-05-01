import CodingTimelapse from "./CodingTimelapse";
import myPicture from "../../Images/20240227_173433.jpg";
import spinMeRound from "../Audio/Voicy_Dead Or Alive - You Spin Me Round.mp3";
import useSound from "use-sound";

function Home() {

    const soundUrl1 = spinMeRound;
    const [play1,{stop}] = useSound(soundUrl1)

    return ( 
        <div>
            <div>
                <h1 style={{textAlign: "center"}}>Welcome to my Personal Portfolio</h1>
            </div>
            <div>
                <CodingTimelapse/>
            </div>
            <div>
                <img onMouseOver={()=> { play1(); }} onMouseOut={()=> { stop();}} className="picOfMe" src={myPicture} alt="picture of me" width="500px" height="500px" style={{borderRadius: "50%", marginLeft: "59rem"}}/>
                <h5 style={{display: "block", marginLeft: "67rem", textDecorationLine: "underline", marginTop: "10px"}}>Hover your mouse over me</h5>
            </div>
            <br />
            <section>
                <br />
                <h2 style={{textAlign: "center"}}>Throughout this Application I will be showcasing my coding abilities in a fun and engaging way</h2>
                <br />
                <h4 style={{textAlign: "center"}}>Once you have completed your journey through my site please leave me a message on my message board</h4>
            </section>
        </div>
     );
}

export default Home;