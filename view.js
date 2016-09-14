var TETRIS = TETRIS || {};

TETRIS.VIEW.init = function () {
  this.cacheDOM();
};

TETRIS.VIEW.cacheDOM = function() {
  this.$gameGrid = $('table.game-grid');
};

TETRIS.VIEW.clearCache = function() {
  this.$gameGrid.empty();
};

TETRIS.VIEW.render = function(data) {
  TETRIS.VIEW.clearCache();
  data.forEach(function(row) {
    TETRIS.VIEW.$gameGrid.append($('<tr/>'));
    row.forEach(function(cell) {
      $('tr').last().append(TETRIS.VIEW.createCell(cell));
      // $('tr').last().append($(["<td>",cell,"</td>"].join('')));
    });
  });
};

TETRIS.VIEW.createCell = function(color) {
  return $('<td>').addClass(color);
};

TETRIS.VIEW.stylify = function(cell) {
};
