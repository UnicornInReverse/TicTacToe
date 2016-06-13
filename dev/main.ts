/// <reference path="game.ts"/> 
/// <reference path="score.ts" />
/// <reference path="../typings/howler.d.ts" />

window.addEventListener("load", function() {    

      
    let div: HTMLElement = document.createElement("div");
    div.setAttribute ("class", "start");
    document.body.appendChild(div); 
    
    let link: HTMLElement = document.createElement("div");
    link.setAttribute("class", "link");
    link.innerHTML = "Start!";
    div.appendChild(link)
    
    link.addEventListener('click', startGame);

    
    function startGame() {

        var sound = new Howl({
        urls: ['sounds/explosion.wav'],
        volume: 1.0,
        autoplay: true
    }).play;

         var score: Score = new Score();
         new Game(score);
         div.remove();
         link.remove();
    }
   
});