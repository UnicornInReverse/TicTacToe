var Tile = (function () {
    function Tile() {
        this.table = null;
        this.status = false;
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
                tile.id = x + "_" + i;
                tr.appendChild(tile);
                tile.addEventListener('click', this.clickHandler.bind(this));
            }
            this.table.appendChild(tr);
        }
    };
    Tile.prototype.clickHandler = function (e) {
        var shapes = new Shapes;
        console.log(this.status);
        if (this.status) {
            e.target.appendChild(shapes.circle);
            this.status = false;
        }
        else {
            e.target.appendChild(shapes.cross);
            this.status = true;
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
    new Game();
});
var Shapes = (function () {
    function Shapes() {
        this.cross = document.createElement("cross");
        this.circle = document.createElement("circle");
    }
    return Shapes;
}());
var Table = (function () {
    function Table() {
    }
    return Table;
}());
//# sourceMappingURL=main.js.map