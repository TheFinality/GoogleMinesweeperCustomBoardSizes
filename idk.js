window.minesweeper.customBoardSize({
  easy: {
    width:      int, // integer, width  of the easy board
    height:     int, // integer, height of the easy board
    mines:      int, // integer, how many mines will be on the easy board
    squareSize: int, // OPTIONAL: integer, size of each square (some super small sizes won't look right if omitted)
  },
  medium: {
    width:      int, // integer, width  of the medium board
    height:     int, // integer, height of the medium board
    mines:      int, // integer, how many mines will be on the medium board
    squareSize: int, // OPTIONAL: integer, size of each square
  },
  hard: {
    width:      int, // integer, width  of the hard board
    height:     int, // integer, height of the hard board
    mines:      int, // integer, how many mines will be on the hard board
    squareSize: int, // OPTIONAL: integer, size of each square (super large sizes won't be entirely visible if omitted)
  },
});
