var TETRIS = TETRIS || {};

TETRIS.Controller = (function(model, view) {
  var _interval;

  var init = function() {
    model.init();
    view.init();
    _tic();
  };

  var stopLoop = function() {
    window.clearInterval(this.interval);
  };

  var _tic = function() {
    return window.setInterval(function() {
                                model.update();
                                var grid = model.getGrid();
                                view.render(grid);
                            }, 2000);
  };

  return {
    init: init,
    stopLoop: stopLoop
  };
})(TETRIS.Model,TETRIS.View);


// game loop sets interval
// separate event listeners inside the view
// game loop inside controller to update the model and update the view
