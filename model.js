var TETRIS = TETRIS || {};

TETRIS.MODEL.init = function() {
  this.pieces = [];
  this.grid = this.createGrid();
};

TETRIS.MODEL.createGrid = function() {
  var array = new Array(20);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(10);
    for (var j = 0; j < array[i].length; j++) {
      array[i][j] = '_';
    }
  }
  array = this.applyPieces(array);
  return array;
};

TETRIS.MODEL.applyPieces = function(array) {
  this.pieces.forEach(function(piece) {
    piece.coords.forEach(function(coord) {
      array[coord.y][coord.x] = piece.color;
    });
  });
  return array;
};

TETRIS.MODEL.update = function() {
  this.pieces.push(this.createPiece());
  this.grid = this.createGrid();
  // checking if we have a full row
};

TETRIS.MODEL.createPiece = function () {
  var middle = Math.floor(this.grid[0].length/2);
  var position = new this.Pos(middle,0);
  var newPiece = new TETRIS.MODEL.Piece();
  newPiece.create({coords: [position],
                   color: 'grey'});
  return newPiece;
};

TETRIS.MODEL.Piece = function Piece(){
};

TETRIS.MODEL.Piece.prototype.create = function(options) {
  this.setOccupiedCoords(options.coords);
  this.setColor(options.color);
};

TETRIS.MODEL.Piece.prototype.setOccupiedCoords = function(coords) {
  this.coords = coords;
};

TETRIS.MODEL.Piece.prototype.setColor = function(color) {
  this.color = color;
};

TETRIS.MODEL.Pos = function Pos(x, y) {
  this.x = x;
  this.y = y;
};
