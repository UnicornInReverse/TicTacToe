/// <reference path="tile.ts"/>

class Game {
               
    constructor(score: Score) {
 
       let tile:Tile = new Tile(score);
       
       let playerOne: HTMLElement = document.createElement('div');
       playerOne.setAttribute("class", "playerOne");
       playerOne.innerHTML = "Player 1: " + score.player1;
       document.body.appendChild(playerOne);

       let playerTwo: HTMLElement = document.createElement('div');
       playerTwo.setAttribute("class", "playerTwo");
       playerTwo.innerHTML = "Player 2: " + score.player2;
       document.body.appendChild(playerTwo);
       
       tile.tableCreator();
       tile.tileCreator();
                   
    }
}