import { useState } from "react";
import type { Grid } from "../@types/Grid";
import {
  initialGrid,
  increaseCellsValue,
  resetFibonacciSequences,
} from "../utils/grid";
import Cell from "./Cell";

export default function Grid() {
  const [grid, setGrid] = useState<Grid>(initialGrid);

  const handleClick = (i: number, j: number) => {
    const newGrid = [...grid];

    increaseCellsValue(newGrid, i, j);
    resetFibonacciSequences(newGrid);

    setGrid(newGrid);
  };

  return (
    <table className="table-fixed mt-4">
      <tbody>
        {grid?.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={`${i}-${j}`}
                className="border border-slate-200 p-0 leading-none"
              >
                <Cell value={cell} handleClick={() => handleClick(i, j)} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
