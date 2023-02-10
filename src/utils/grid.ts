import type { Grid } from "../@types/Grid";
import { FIB_NUMBERS } from "../constants/fibNumbers";

// Initial grid with 50 rows and 50 columns.
// Value -1 denotes an empty unclicked cell.
export const initialGrid = Array.from({ length: 50 }, () =>
  Array.from({ length: 50 }, () => -1)
);

/**
 * Updates the grid by increasing the value of all cells by one in the same row
 * and column. If the clicked cell has a value of -1 (which denotes that it has
 * not been clicked yet), its value is set to 1.
 *
 * @param grid  The grid to be updated
 * @param x     The row index of the cell clicked
 * @param y     The column index of the cell clicked
 *
 * @returns     The updated grid
 */
export function increaseCellsValue(grid: Grid, x: number, y: number): Grid {
  // Increse same row cells except the one clicked
  grid[x].forEach((cell, colIndex) => {
    if (y !== colIndex) {
      if (grid[x][colIndex] === -1) {
        grid[x][colIndex] = 1;
      } else {
        grid[x][colIndex] += 1;
      }
    }
  });

  grid.forEach((row, rowIndex) => {
    // Increase same column cells
    if (grid[rowIndex][y] === -1) {
      grid[rowIndex][y] = 1;
    } else {
      grid[rowIndex][y] += 1;
    }
  });

  return grid;
}

/**
 * Updates the grid by setting the value of all 5-cell sequences that belong to
 * the Fibonacci sequence to 0.
 *
 * @param grid  The grid to be updated
 *
 * @returns     The updated grid
 */
export function resetFibonacciSequences(grid: Grid): Grid {
  grid.forEach((row, rowIndex) => {
    // Check every 5-cell sequence on each row.
    // NOTE: This only checks for sequences in the same row. It could be
    // improved by checking for sequences in the same column, diagonally or in
    // subsequent rows.
    for (let k = 0; k <= row.length - 5; k++) {
      let sequence = row.slice(k, k + 5);

      // For easy comparison, convert both arrays to comma-separated strings
      const fibNumbersJoined = FIB_NUMBERS.join(",");
      const sequenceJoined = sequence.join(",");

      // If a match is found, set all cells in the sequence to 0
      if (fibNumbersJoined.includes(sequenceJoined)) {
        for (let l = k; l < k + 5; l++) {
          grid[rowIndex][l] = 0;
        }
      }
    }
  });

  return grid;
}
