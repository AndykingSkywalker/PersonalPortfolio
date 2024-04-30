import chessImage from "../../Images/chess.jpg";
import newVegasPic from "../../Images/newVegas.webp";
import cyberpunkPic from "../../Images/cyberpunk.jpg";

function GameBlog() {
    return ( 
       <div>
        <section id="blog">
        <h2>What have I been playing?</h2>
        <div class="firstGame">
          <h1 id="game-heading">Fallout New Vegas</h1>
      <img src={newVegasPic}/>
           <p id="game-text">Fallout is one of my favourite game series, In my opinion the best one is Fallout New Vegas
               
              No matter how many times I have played through this game I have always enjoyed it.
                
                The gameplay is great and the story is compelling. The dialogue alone makes this game stand out.
                 Not to mention the easter eggs, If you are to play this game you must play with the Wild Wasteland perk.
                
                      
                       I highly recommend this game to anyone who loves RPG's, just don't forget to take a sip from your Vault 13 canteen <br/>
                        <span>-Written by Andrew King</span>              
              </p>
  </div>
  <div class="secondGame">
      <h1 id="game-heading">Cyberpunk 2077</h1>
  <img src={cyberpunkPic}/>
       <p id="game-text"> Cyberpunk 2077 is one of the most beautiful games I have ever played. On PC with the graphics maxed out and ray tracing enabled the visuals are second to none.
           <br/>
          I love CD Projekt Red games such as The Witcher series, Cyberpunk may have had a bad launch but the developers have overcome the odds of other poorly launched games and through various patches and updated. The game is fully fixed and in it's best state. 
           <br/>
          There's something so cool about riding around on a motorbike with your Katana at hand ready to battle some enemies. The world itself is so immersive and one of the best worlds in gaming
           <br/>
           if you never gave Cyberpunk a chance before or if you were put off by the launch, take my word that it is now a must play!   <br/>  
              
           <span>-Written by Andrew King</span>           
          </p>
</div>
<div class="thirdGame">
  <h1 id="game-heading">5D Chess with Multiverse Time Travel</h1>
<img src={chessImage}/>
   <p id="game-text"> Okay hear me out on this one!
       <br />
          Yeah The Witcher 3 may have beautiful graphics and Grand Theft Auto 5 may have better gameplay.. 
          <br/>
            But!
          <br/>
              When was the last time you read a game's title and had an existential crisis? 
          <br/>
               5D Chess with Multiverse Time Travel pulled me in with it's incredible title and I was left scratching my head as I couldn't wrap my mind around what I just read,
               after playing the game however I believe the developers struck gold with such an amazing concept. If you make a mistake in your game of chess you can literally
               travel back in time and change you move, However this will cause an alternate timeline to appear and force you to play chess across multiple dimensions of time.

               <br/>
               When was the last time you ever heard anything as insane as that?
               Do yourself a favour and just go buy the game please <br/>

               <span>-Written by Andrew King</span>
      </p>
</div>
      </section>
       </div>
     );
}

export default GameBlog;
