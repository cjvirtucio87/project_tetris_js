var TETRIS = TETRIS || {};

TETRIS.Validations = (function () {
  var _model;

  var init = function (model) {
    _model = model;
  };
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
    if (_KEY_PRESS_CODES[event.which]) {
      return _KEY_PRESS_CODES[event.which];
    }
  };

  var validateMovementBounds = function (keyPress) {
    switch (keyPress) {
      case 4:
        return _validateLeft(keyPress);
      case 6:
        return _validateRight(keyPress);
      case 2:
        return _validateRight(keyPress);
    }
  };

  // Using function composition to dynamically create validations.
  var _checkAllBlocks = function (check) {
    return function(keyPress) {
      return _model.getCurrentPieceCoords().every(check(keyPress));
    };
  };

  var _validateLeft = _checkAllBlocks(function(keyPress) {
    return function (coord) {
      return (coord.x + _COORDINATE_CHANGE[keyPress].x) > 0;
    };
  });

  var _validateDown = _checkAllBlocks(function(keyPress) {
    return function (coord) {
      return (coord.y + _COORDINATE_CHANGE[keyPress].y) < _model.bounds.y;
    };
  });

  var _validateRight = _checkAllBlocks(function(keyPress) {
    return function (coord) {
      return (coord.x + _COORDINATE_CHANGE[keyPress].x) < _model.bounds.x;
    };
  });

  return {
    filterKeyPress: filterKeyPress,
    validateMovementBounds: validateMovementBounds,
    init: init
  };
})();
