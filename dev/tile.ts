class Tile {

    public table:HTMLElement = null;
    public status:boolean = false;
    public counter:number = 0;    
    private tile1: HTMLElement = null;
    private tile2: HTMLElement = null;
    private tile3: HTMLElement = null;
    private tile4: HTMLElement = null;
    private tile5: HTMLElement = null;
    private tile6: HTMLElement = null;
    private tile7: HTMLElement = null;
    private tile8: HTMLElement = null;
    private tile9: HTMLElement = null;
   

    constructor(){

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

    public clickHandler (e) {

        let shapes = new Shapes;
        
        if(e.target.className != "unclicked") {
            console.log("Full");   
        }
        
        else {
            
            if (this.status) {
                e.target.appendChild(shapes.circle);
                e.target.setAttribute("class", "clickedO");
                this.status = false;
                
                
                                
            } else {
                e.target.appendChild(shapes.cross);
                e.target.setAttribute("class", "clickedX");
                this.status = true;
                
            }
            
            this.counter ++;
                           
        this.tileCollection();
                    
            
        }
       
        
        if(this.counter > 8) {
            var confirm = window.confirm("Je hebt verloren! Of gewonnen?")
            if(confirm) {
                new Game;    
            } 
            
        }
    }
    
    private tileCollection(): void {
    
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
            console.log("X wint!");
            this.endScreen("X");
        }
        
        else if (this.tile1.className =="clickedO" && this.tile2.className =="clickedO" && this.tile3.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.tile4.className =="clickedX" && this.tile5.className =="clickedX" && this.tile6.className =="clickedX") {
            console.log("X wint!");
        }
        
        else if (this.tile4.className =="clickedO" && this.tile5.className =="clickedO" && this.tile6.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.tile7.className =="clickedX" && this.tile8.className =="clickedX" && this.tile9.className =="clickedX") {
            console.log("X wint!");
        }
        
         else if (this.tile7.className =="clickedO" && this.tile8.className =="clickedO" && this.tile9.className =="clickedO") {
            console.log("O wint!");
        }
        
         else if (this.tile1.className =="clickedX" && this.tile4.className =="clickedX" && this.tile7.className =="clickedX") {
            console.log("X wint!");
        }
        
        else if (this.tile1.className =="clickedO" && this.tile4.className =="clickedO" && this.tile7.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.tile2.className =="clickedX" && this.tile5.className =="clickedX" && this.tile8.className =="clickedX") {
            console.log("X wint!");
        }
        
        else if (this.tile2.className =="clickedO" && this.tile5.className =="clickedO" && this.tile8.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.tile3.className =="clickedX" && this.tile6.className =="clickedX" && this.tile9.className =="clickedX") {
            console.log("X wint!");
        }
        
        else if (this.tile3.className =="clickedO" && this.tile6.className =="clickedO" && this.tile9.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.tile1.className =="clickedX" && this.tile5.className =="clickedX" && this.tile9.className =="clickedX") {
            console.log("X wint!");
        }
        
        else if (this.tile1.className =="clickedO" && this.tile5.className =="clickedO" && this.tile9.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.tile3.className =="clickedX" && this.tile5.className =="clickedX" && this.tile7.className =="clickedX") {
            console.log("X wint!");
        }
        
        else if (this.tile3.className =="clickedO" && this.tile5.className =="clickedO" && this.tile7.className =="clickedO") {
            console.log("O wint!");
        }
        
        else if (this.counter > 8) {
            console.log("Draw :(");
            
        }
    }
    
    private endScreen(winner):void {
        console.log(winner);
        
    }
}