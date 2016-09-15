// Majority of Piece functionality is in the prototype.
TETRIS.Piece = function Piece(){
};

TETRIS.Piece.prototype.create = function(options) {
  this.setOccupiedCoords(options.coords);
  this.setColor(options.color);
};

TETRIS.Piece.prototype.setOccupiedCoords = function(coords) {
  this.coords = coords;
};

TETRIS.Piece.prototype.setColor = function(color) {
  this.color = color;
};

TETRIS.Pos = function Pos(x, y) {
  this.x = x;
  this.y = y;
};

TETRIS.colors = {

};
