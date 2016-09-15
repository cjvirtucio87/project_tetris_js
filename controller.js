var TETRIS = TETRIS || {};

TETRIS.Controller = (function(model, view, handlers, validations) {
  var _interval;
  var _onKeyPress;

  var init = function() {
    model.init();
    view.init();
    validations.init(model);
    _attachEventHandlers();
    _tic();
  };

  var stopLoop = function() {
    window.clearInterval(this.interval);
  };

  var _tic = function() {
    window.setInterval(function() {
                          model.update();
                          var grid = model.getGrid();
                          view.render(grid);
                      }, 2000);
  };

  var _attachEventHandlers = function () {
    $(document).on('keydown', handlers.handleMovement);
  };

  return {
    init: init,
    stopLoop: stopLoop
  };
})(TETRIS.Model,TETRIS.View,TETRIS.EventHandlers,TETRIS.Validations);


// game loop sets interval
// separate event listeners inside the view
// game loop inside controller to update the model and update the view
