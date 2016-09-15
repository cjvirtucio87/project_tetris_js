var TETRIS = TETRIS || {};

TETRIS.Model = (function() {
  var _pieces = [];
  var _grid;
  var _currentPiece;

  var init = function() {
    _grid = _createGrid();
    _currentPiece = _createPiece();
  };

  var update = function() {
    _grid = _createGrid();
    if (_checkIfAtEnd()) {
      _currentPiece = _createPiece();
    } else {
      _movePieceForward();
    }
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

  var getCurrentPieceCoords = function() {
    return _currentPiece.coords;
  };

  var _applyPieces = function(array) {
    _pieces.forEach(function(piece) {
      piece.coords.forEach(function(coord) {
        array[coord.y][coord.x] = piece.color;
      });
    });
    return array;
  };

  // Function composition for movement.
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
  var _movePieceRight = _movePiece('x',function(coord) { return ++coord.x; });

  var _createPiece = function () {
    var position = _makePos();
    var color = _randomColor();
    var newPiece = new TETRIS.Piece();
    var coords = _makeCoords(color, position);
    newPiece.create({coords: coords,
                     color: color});
    return newPiece;
  };

  var _makePos = function() {
    var middle = Math.floor(_grid[0].length/2);
    var position = new TETRIS.Pos(middle,1);
    return position;
  };

  var _randomColor = function() {
    return ['gray','yellow','purple','orange'][Math.floor(Math.random()*4)];
  };

  var _makeCoords = function(color, position) {
    switch (color) {
      case 'gray':
        return [position];
      case 'yellow':
        var yellowCoords = [position];
        yellowCoords.push(new TETRIS.Pos(position.x-1,position.y));
        yellowCoords.push(new TETRIS.Pos(position.x+1,position.y));
        yellowCoords.push(new TETRIS.Pos(position.x+1,position.y-1));
        return yellowCoords;
      case 'purple':
        var purpleCoords = [position];
        purpleCoords.push(new TETRIS.Pos(position.x-1,position.y));
        purpleCoords.push(new TETRIS.Pos(position.x-1,position.y-1));
        purpleCoords.push(new TETRIS.Pos(position.x,position.y-1));
        return purpleCoords;
      case 'orange':
        var orangeCoords = [position];
        orangeCoords.push(new TETRIS.Pos(position.x-1,position.y));
        orangeCoords.push(new TETRIS.Pos(position.x+1,position.y));
        orangeCoords.push(new TETRIS.Pos(position.x+2,position.y));
        return orangeCoords;
    }
  };

  var updateCurrentPiece = function (keyPress) {
    switch (keyPress) {
      case 4:
        _movePieceLeft();
        break;
      case 6:
        _movePieceRight();
        break;
      case 8:
        _movePieceForward();
        break;
    }
  };

  var _checkIfAtEnd = function () {
    var highestCoord = _currentPiece.coords.reduce(function(acc,block) {
      return { y: Math.max(acc.y,block.y), x: Math.min(acc.x,block.x)};
    }, {x: Number.MAX_SAFE_INTEGER, y: 1});
    return !(_grid[highestCoord.y+1]) || _grid[highestCoord.y+1][highestCoord.x] !== '_';
  };

  return {
    init: init,
    getGrid: getGrid,
    update: update,
    bounds: {x: 10, y: 20},
    getCurrentPieceCoords: getCurrentPieceCoords,
    updateCurrentPiece: updateCurrentPiece
  };
})();
