var TETRIS = TETRIS || {};

TETRIS.Validations = (function () {
  var _KEY_PRESS_CODES = {
    37: 4,
    38: 8,
    39: 6,
    40: 2,
    32: 'rotate'
  };

  var _COORDINATE_CHANGE = {
    4: {x: -1, y: 0},
    6: {x: 1, y: 0},
    2: {x: 0, y: 1}
  };

  var filterKeyPress = function (event) {
    if (View.KEY_PRESS_CODES[event.which]) {
      return View.KEY_PRESS_CODES[event.which];
    }
  };

  var _validateMovementBounds = function (keyPress) {
    switch (keyPress) {
      case 4:
        return _validateLeft();
      case 6:
        return _validateRight();
      case 2:
        return _validateRight();
    }
  };

  var _checkAllBlocks = function (check) {
    return function(keyPress) {
      return model.getCurrentPieceCoords.every(check);
    };
  };

  var _validateLeft = _checkAllBlocks(function(coord) {
    return (coord.x + _COORDINATE_CHANGE[keyPress]) > 0;
  });

  var _validateDown = _checkAllBlocks(function(coord) {
    return (coord.y + _COORDINATE_CHANGE[keyPress]) < model.bounds.y;
  });

  var _validateRight = _checkAllBlocks(function(coord) {
    return (coord.x + _COORDINATE_CHANGE[keyPress]) < model.bounds.x;
  });

  return {
    filterKeyPress: filterKeyPress,
    validateMovement: validateMovementBounds
  };

})(TETRIS.Model);
