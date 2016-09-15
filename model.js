var TETRIS = TETRIS || {};

TETRIS.Model = (function() {

  var _pieces = [];
  var _grid;

  var init = function() {
    _grid = _createGrid();
  };

  var _createGrid = function() {
    var array = new Array(20);
    for (var i = 0; i < array.length; i++) {
      array[i] = new Array(10);
      for (var j = 0; j < array[i].length; j++) {
        array[i][j] = '_';
      }
    }
    array = _applyPieces(array);
    return array;
  };

  var getGrid = function() {
    return _grid;
  };

  var _applyPieces = function(array) {
    _pieces.forEach(function(piece) {
      piece.coords.forEach(function(coord) {
        array[coord.y][coord.x] = piece.color;
      });
    });
    return array;
  };

  var update = function() {
    _pieces.push(_createPiece());
    _grid = _createGrid();
  };

  var _createPiece = function () {
    var middle = Math.floor(_grid[0].length/2);
    var position = new TETRIS.Pos(middle,0);
    var newPiece = new TETRIS.Piece();
    newPiece.create({coords: [position],
                     color: 'grey'});
    return newPiece;
  };

  return {
    init: init,
    getGrid: getGrid,
    update: update
  };
})();
