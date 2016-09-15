var TETRIS = TETRIS || {};

TETRIS.View = (function () {
  var $gameGrid;

  var init = function () {
    _cacheDOM();
  };

  var _cacheDOM = function() {
    $gameGrid = $('table.game-grid');
  };

  var _clearCachedCells = function() {
    $gameGrid.empty();
  };

  var _createCell = function(color) {
    return $('<td>').addClass(color);
  };

  var render = function(data) {
    _clearCachedCells();
    data.forEach(function(row) {
      $gameGrid.append($('<tr/>'));
      row.forEach(function(cell) {
        $('tr').last().append(_createCell(cell));
      });
    });
  };

  var stylify = function(cell) {
  };

  return {
    init: init,
    $gameGrid: $gameGrid,
    render: render
  };
})();
