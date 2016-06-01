/// <reference path="game.ts"/> 

window.addEventListener("load", function() {    
    
    new Game();
    
    // let div: HTMLElement = document.createElement("div");
    // div.setAttribute ("class", "start");
    // document.body.appendChild(div); 
    
    // let link: HTMLElement = document.createElement("div");
    // link.setAttribute("class", "link");
    // link.innerHTML = "START";
    // div.appendChild(link)
    
    // link.addEventListener('click', startGame);    
    
    function startGame() {
         new Game();
        //  div.remove();
        //  link.remove();
    }
   
});