import { increaseCellsValue, resetFibonacciSequences } from "./grid";

describe("increaseCellsValue", () => {
  it("should increase the value of all cells by one in the same row and column", () => {
    const grid = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
    const x = 1;
    const y = 1;
    const updatedGrid = increaseCellsValue(grid, x, y);
    expect(updatedGrid[0][0]).toBe(-1);
    expect(updatedGrid[0][1]).toBe(1);
    expect(updatedGrid[0][2]).toBe(-1);
    expect(updatedGrid[1][0]).toBe(1);
    expect(updatedGrid[1][1]).toBe(1);
    expect(updatedGrid[1][2]).toBe(1);
  });
});

describe("resetFibonacciSequences", () => {
  it("should return the same array if it doesn’t contain a 5-number Fibonacci sequence", () => {
    const grid = [
      [1, 0, 1, 0, 1],
      [0, -1, -1, 1, -1],
      [1, 1, -1, 0, 0],
      [-1, 1, -1, 0, 0],
      [1, 1, 1, 1, 1],
    ];
    const resetGrid = resetFibonacciSequences(grid);
    expect(resetGrid).toEqual(grid);
  });

  it("should return an array with all 5-cell sequences that belong to the Fibonacci sequence changed to 0", () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 2, 3, 5], // Fibonacci sequence
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const resetGrid = resetFibonacciSequences(grid);
    expect(resetGrid[2]).toEqual([0, 0, 0, 0, 0]);
  });
});
