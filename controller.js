var TETRIS = TETRIS || {};

TETRIS.CONTROLLER.init = function() {
  TETRIS.MODEL.init();
  TETRIS.VIEW.init();
  this.tic();
};

TETRIS.CONTROLLER.tic = function() {
  setInterval(function() {
    TETRIS.MODEL.update();
    var grid = TETRIS.MODEL.grid;
    TETRIS.VIEW.render(grid);
  });
};

// game loop sets interval
// separate event listeners inside the view
// game loop inside controller to update the model and update the view
