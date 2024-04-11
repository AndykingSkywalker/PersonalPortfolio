import htmlPicture from "../../Images/html-5-svgrepo-com.svg";
import cssPicture from "../../Images/css-3-svgrepo-com.svg";
import jsPicture from "../../Images/js-svgrepo-com.svg";
import reactPicture from "../../Images/react-1-logo-png-transparent (1).png";
import javaPicture from "../../Images/java-svgrepo-com.svg";
import springPicture from "../../Images/spring-svgrepo-com.svg";
import sqlPicture from "../../Images/sql-svgrepo-com.svg";

function AboutMe() {
    return ( 
        <div>
            <h1 style={{textAlign: "center"}}>
                About Me
            </h1>
            <br />
            <div style={{textAlign: "center"}}>
                <p>I am a 28 year old Software Engineer, who has been coding since 2021</p>
                <p>I currently work for Lloyds Banking Group and most recently have completed a Reskilling Course</p>
            </div>
            <br />
            <div style={{textAlign: "center"}}>
                <p>I have learned the following throughout my years of coding:</p>
                <ul style={{listStyle: "none", fontWeight: "bold"}}>
                    <li>HTML <img src={htmlPicture} width="25px" alt="" /></li>
                    <li>CSS <img src={cssPicture} width="25px" alt="" /></li>
                    <li>JavaScript <img src={jsPicture} width="25px" alt="" /></li>
                    <li>React <img src={reactPicture} width="25px" alt="" /></li>
                    <li>Java <img src={javaPicture} width="25px" alt="" /></li>
                    <li>Spring <img src={springPicture} width="25px" alt="" /></li>
                    <li>SQL <img src={sqlPicture} width="25px" alt="" /></li>
                </ul>
            </div>
            <br />
            <div className="container text-center" style={{textAlign: "center"}}>
                <div className="row">
                    <div className="col">
                        <h3>My Hobbies</h3>
                        <p>
                            In my spare time I enjoy playing Videogames and actively collect retro videogames.
                        </p>
                        <p>
                        At the time of writing this I currently own a <b>NES</b>, <b>SNES</b>, <b>N64</b>, <b>Sega Master System</b> along with my <b>PS1</b> + <b>PS2</b>
                        </p>
                        <p>
                            I also love movies and go out of my way to make sure I keep up with the latest releases.
                        </p>
                        <p>
                            The last movie I went to see was <a style={{fontWeight:"bold", fontStyle: "italic"}} href="https://en.wikipedia.org/wiki/The_Boy_and_the_Heron" target="_blank">The Boy and The Heron</a>, I am a huge Studio Ghibli fan and love all their movies, I really enjoyed this one and can't wait to see it again.
                        </p>
                    </div>
                    <div className="col">
                        <h3>My Education</h3>
                        <p>I have gained A-Levels in the following subjects:</p>
                        <ul style={{listStyle: "none", fontWeight: "bold"}}>
                            <li>IT</li>
                            <li>Media Graphics (Game Design)</li>
                            <li>Philosophy</li>
                            <li>Ethics</li>
                        </ul>
                        <p>I have always had an interest in tech and from leaving education have aspired to do many things</p>
                        <p>At one point I was considering entering Game Development and as such began learning some fundamentals of coding in Python to support this</p>
                        <p>However I found that Game Development was maybe too big of a hurdle to jump over straight away and so I decided to learn the basics of Web Development to get some good ground knowledge of experienced developing.</p>
                    </div>
                    <div className="col">
                        <h3>My Training/Certifications</h3>
                        <p>In my own time I have taken a Full Stack Engineering course via <a className="hyperlink" style={{textDecorationLine: "none", fontWeight: "bold"}} href="https://www.codecademy.com/">Codecademy</a></p>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default AboutMe;