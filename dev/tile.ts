/// <reference path="circle.ts" />
/// <reference path="cross.ts" />
/// <reference path="../typings/howler.d.ts" />


class Tile {

    private table:HTMLElement = null;
    private status:boolean = false;
    private counter:number = 0;    
    private tile1: HTMLElement;
    private tile2: HTMLElement;
    private tile3: HTMLElement;
    private tile4: HTMLElement;
    private tile5: HTMLElement;
    private tile6: HTMLElement;
    private tile7: HTMLElement;
    private tile8: HTMLElement;
    private tile9: HTMLElement;
    private div: HTMLElement;
    private link: HTMLElement;
    private button: HTMLElement;
    private score: Score;
    private turn: HTMLElement;   
    private cross: Shapes; 
    private circle: Shapes; 


    constructor(score: Score) {

        this.cross = new Cross;
        this.circle = new Circle;   

        this.score = score;
        this.turn = document.createElement('div');
        this.turn.setAttribute('class', 'turn');
        this.turn.appendChild(this.cross.getImage());
        document.body.appendChild(this.turn);
        
        
    }

    public tableCreator() {
            this.table = document.createElement("table");
            document.body.appendChild(this.table);            
    }

    public tileCreator () {
        this.table.innerHTML = "";

        for(let x = 0; x < 3; x++) {
            let tr: HTMLElement = document.createElement("tr");
            for (let i = 0; i < 3; i++) {
                var tile:HTMLElement = document.createElement("td");
                tile.setAttribute("class", "unclicked");
                tile.id = x + "_" + i;

                tr.appendChild(tile);
                tile.addEventListener('click', this.clickHandler.bind(this))

            }
            this.table.appendChild(tr);
        }



    }

    private clickHandler (e) {        
        if(e.target.className != "unclicked") {
            console.log("Full"); 
        }
        
        else {
            
            if (this.status) {
                this.turn.innerHTML = "";
                this.turn.appendChild(this.cross.getImage());
                
                e.target.appendChild(this.circle.getImage());
                e.target.setAttribute("class", "clickedO");
                this.status = false;

                this.circle.playSound();
                
                                
            } else {
                this.turn.innerHTML = "";                
                this.turn.appendChild(this.circle.getImage());

                e.target.appendChild(this.cross.getImage());
                e.target.setAttribute("class", "clickedX");
                this.status = true;
                
                this.cross.playSound();   
                
            }
            
            this.counter ++;
                           
        this.tileInit();
            
        }
    }
    
    private tileInit(): void {
    
    this.tile1 = document.getElementById("0_0");
    this.tile2 = document.getElementById("0_1");
    this.tile3 = document.getElementById("0_2");
    this.tile4 = document.getElementById("1_0");
    this.tile5 = document.getElementById("1_1");
    this.tile6 = document.getElementById("1_2");
    this.tile7 = document.getElementById("2_0");
    this.tile8 = document.getElementById("2_1");
    this.tile9 = document.getElementById("2_2");
    
    this.checker();
    
    }
    
    private checker(): void {
        
        if (this.tile1.className =="clickedX" && this.tile2.className =="clickedX" && this.tile3.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile1.className =="clickedO" && this.tile2.className =="clickedO" && this.tile3.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.tile4.className =="clickedX" && this.tile5.className =="clickedX" && this.tile6.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile4.className =="clickedO" && this.tile5.className =="clickedO" && this.tile6.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.tile7.className =="clickedX" && this.tile8.className =="clickedX" && this.tile9.className =="clickedX") {
            this.endScreen("X");
        }
        
         else if (this.tile7.className =="clickedO" && this.tile8.className =="clickedO" && this.tile9.className =="clickedO") {
            this.endScreen("O");
        }
        
         else if (this.tile1.className =="clickedX" && this.tile4.className =="clickedX" && this.tile7.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile1.className =="clickedO" && this.tile4.className =="clickedO" && this.tile7.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.tile2.className =="clickedX" && this.tile5.className =="clickedX" && this.tile8.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile2.className =="clickedO" && this.tile5.className =="clickedO" && this.tile8.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.tile3.className =="clickedX" && this.tile6.className =="clickedX" && this.tile9.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile3.className =="clickedO" && this.tile6.className =="clickedO" && this.tile9.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.tile1.className =="clickedX" && this.tile5.className =="clickedX" && this.tile9.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile1.className =="clickedO" && this.tile5.className =="clickedO" && this.tile9.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.tile3.className =="clickedX" && this.tile5.className =="clickedX" && this.tile7.className =="clickedX") {
            this.endScreen("X");
        }
        
        else if (this.tile3.className =="clickedO" && this.tile5.className =="clickedO" && this.tile7.className =="clickedO") {
            this.endScreen("O");
        }
        
        else if (this.counter > 8) {
            this.endScreen("Draw");
            
        }
    }
    
    private endScreen(winner):void {
        this.div = document.createElement("div");
        this.div.setAttribute ("class", "background")
        document.body.appendChild(this.div);
        
        this.link = document.createElement("div");
        this.link.setAttribute ("class", "link");
        
        if (winner == "Draw") {
            this.link.innerHTML = "Draw! </br>";
        }
        
        else {
            // this.link.innerHTML =" wins!";
            
            if (winner == "X") {
                this.score.player1 += 1;
                this.link.innerHTML = "Guitar wins!               "
            }
            
            else {
                this.score.player2 += 1;
                this.link.innerHTML = "Drums win!  "
            }
        
        }
        
        document.body.appendChild(this.link);
        
        this.button = document.createElement("button");
        this.button.setAttribute ("class", "button");
        this.button.innerHTML = "Play again!";
        this.button.addEventListener ('click', this.playAgain.bind(this));
        this.link.appendChild (this.button);
               
    }
    
   private playAgain(): void {
       this.div.remove();
       this.link.remove();
       this.button.remove();
       this.counter = 0;
       this.table.remove();
       console.log(this.score.player1, this.score.player2);
       
       new Game(this.score);
   } 
}