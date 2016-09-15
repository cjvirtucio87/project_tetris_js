var TETRIS = TETRIS || {};

TETRIS.EventHandlers = (function (model,validations) {
  var handleMovement = function(ev) {
    var keyPress = validations.filterKeyPress(ev);
    if (validations.validateMovementBounds(keyPress)) {
      model.updateCurrentPiece(keyPress);
    }
  };

  return {
    handleMovement: handleMovement
  };
})(TETRIS.Model,TETRIS.Validations);
