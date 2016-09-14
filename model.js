var TETRIS = TETRIS || {};
TETRIS.MODEL = {};

TETRIS.MODEL.init = function() {
  TETRIS.MODEL.grid = [];
};

TETRIS.MODEL.Piece = function Piece(){
};

// APP.Spaceship = function Spaceship (x,y,degrees, velocity) {
//   this.coordX = x;
//   this.coordY = y;
//   this.degrees = degrees || 90;
//   this.velocity = velocity || 1;
// };

TETRIS.MODEL.Piece.prototype.setOccupiedCoords = function(coords) {
  this.occupiedCoords = coords;
};

TETRIS.MODEL.Piece.prototype.getOccupiedCoords = function() {
  return this.occupiedCoords;
};

