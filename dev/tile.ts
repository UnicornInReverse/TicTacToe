class Tile {

    public table:HTMLElement = null;
    public status:boolean = false;
    public counter:number = 0;
    


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
            console.log("Can't do shit");   
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
        }
        
        if(this.counter > 8) {
            var confirm = window.confirm("Je hebt verloren! Of gewonnen?")
            if(confirm) {
                new Game;    
            } 
            
        }
    }
}