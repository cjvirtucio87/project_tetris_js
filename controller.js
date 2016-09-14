var TETRIS = TETRIS || {};

TETRIS.CONTROLLER.init = function(model, view) {
  this.model = model;
  this.view = view;
  this.model.init();
  this.view.init();
  this.tic();
};

TETRIS.CONTROLLER.tic = function() {
  this.interval =
    (function(that) {
      return window.setInterval(function() {
        that.model.update();
        var grid = TETRIS.MODEL.grid;
        that.view.render(grid);
      }, 2000);
    })(this);
};

TETRIS.CONTROLLER.stopLoop = function() {
  window.clearInterval(this.interval);
};

// game loop sets interval
// separate event listeners inside the view
// game loop inside controller to update the model and update the view
