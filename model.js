var TETRIS = TETRIS || {};

TETRIS.Model = (function() {

  var _pieces = [];
  var _grid;
  var _currentPiece;

  var init = function() {
    _grid = _createGrid();
    var newPiece = _createPiece();
    _currentPiece = newPiece;
  };

  var update = function() {
    _grid = _createGrid();
    _movePieceForward();
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

  // Increment y coordinate of every 'coord' in occupied by the piece.
  var _movePiece = function(axis,mutate) {
    return function () {
      _currentPiece.coords.forEach(function(coord) {
         coord[axis] = mutate(coord);
        _grid[coord.y][coord.x] = _currentPiece.color;
      });
    };
  };

  var _movePieceForward = _movePiece('y',function(coord) { return ++coord.y; });
  var _movePieceLeft = _movePiece('x',function(coord) { return --coord.x; });

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
