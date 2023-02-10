export default function Description() {
  return (
    <>
      <h2 className="text-xl mt-2">Description</h2>
      <p className="mt-1 text-gray-700">
        Create a grid of 50 ✕ 50 cells. When you click on a cell, all values in
        the cells in the same row and same column are increased by 1 or, if
        empty, will get a value of 1. After each change, all modified cells will
        briefly turn yellow. If 5 consecutive numbers in the Fibonacci sequence
        are next to each other, these cells will briefly turn green and will be
        emptied.
      </p>
    </>
  );
}
