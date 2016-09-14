var TETRIS = TETRIS || {};

TETRIS.MODEL.init = function() {
  var array = new Array(20);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(10);
    for (var j = 0; j < array[i].length; j++) {
      array[i][j] = '_';
    }
  }
  TETRIS.MODEL.grid = array;
};

TETRIS.MODEL.update = function() {
  // advancing positions of pieces
  // checking if we have a full row
};

TETRIS.createPiece = function () {
  var middle = Math.floor(this.grid[0].length/2);
  var position = new Pos(middle,0);
  var newPiece = new TETRIS.MODEL.Piece();
  newPiece.create({coords: [position],
                   type: 'single'});
  return newPiece;
};

TETRIS.MODEL.Piece = function Piece(){
};

TETRIS.MODEL.Piece.prototype.create = function(options) {
  this.setOccupiedCoords(options.coords);
  this.setType(options.type);
};

TETRIS.MODEL.Piece.prototype.setOccupiedCoords = function(coords) {
  this.occupiedCoords = coords;
};

TETRIS.MODEL.Piece.prototype.setType = function(options) {
  this.type = options.type;
};

TETRIS.MODEL.Pos = function Pos(x, y) {
  this.x = x;
  this.y = y;
};
