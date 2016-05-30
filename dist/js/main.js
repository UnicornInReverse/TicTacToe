var Shapes = (function () {
    function Shapes() {
        this.cross = document.createElement("cross");
        this.circle = document.createElement("circle");
    }
    return Shapes;
}());
var Tile = (function () {
    function Tile() {
        this.table = null;
        this.status = false;
        this.counter = 0;
    }
    Tile.prototype.tableCreator = function () {
        this.table = document.createElement("table");
        document.body.appendChild(this.table);
    };
    Tile.prototype.tileCreator = function () {
        this.table.innerHTML = "";
        for (var x = 0; x < 3; x++) {
            var tr = document.createElement("tr");
            for (var i = 0; i < 3; i++) {
                var tile = document.createElement("td");
                tile.setAttribute("class", "unclicked");
                tile.id = x + "_" + i;
                tr.appendChild(tile);
                tile.addEventListener('click', this.clickHandler.bind(this));
            }
            this.table.appendChild(tr);
        }
    };
    Tile.prototype.clickHandler = function (e) {
        var shapes = new Shapes;
        if (e.target.className != "unclicked") {
            console.log("Can't do shit");
        }
        else {
            if (this.status) {
                e.target.appendChild(shapes.circle);
                e.target.setAttribute("class", "clickedO");
                this.status = false;
            }
            else {
                e.target.appendChild(shapes.cross);
                e.target.setAttribute("class", "clickedX");
                this.status = true;
            }
            this.counter++;
        }
        if (this.counter > 8) {
            var confirm = window.confirm("Je hebt verloren! Of gewonnen?");
            if (confirm) {
                new Game;
            }
        }
    };
    return Tile;
}());
var Game = (function () {
    function Game() {
        var tile = new Tile();
        tile.tableCreator();
        tile.tileCreator();
    }
    return Game;
}());
window.addEventListener("load", function () {
    var div = document.createElement("div");
    div.setAttribute("class", "start");
    document.body.appendChild(div);
    var link = document.createElement("div");
    link.setAttribute("class", "link");
    link.innerHTML = "START";
    div.appendChild(link);
    link.addEventListener('click', startGame);
    function startGame() {
        new Game();
        div.remove();
        link.remove();
    }
});
//# sourceMappingURL=main.js.map