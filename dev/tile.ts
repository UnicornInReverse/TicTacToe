class Tile {
    
    public table:HTMLElement = null;
    public status:boolean = false;
        
    
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
                tile.id = x + "_" + i;
                tr.appendChild(tile);
                tile.addEventListener('click', this.clickHandler.bind(this))
                            
            }  
            this.table.appendChild(tr);
        }
        
        
    }
    
    public clickHandler (e) { 
        
        let shapes = new Shapes;    
         console.log(this.status);
                
        if (this.status) {
            e.target.appendChild(shapes.circle);
            this.status = false;
        }
        
        else {
            e.target.appendChild(shapes.cross);
            this.status = true;
        }
               
     
    }
}