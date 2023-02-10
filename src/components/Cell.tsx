import { useState, useEffect } from "react";
import cx from "clsx";
import type { Cell, CellBackground } from "../@types/Cell";

export default function Cell({ value, handleClick }: Cell) {
  const [background, setBackground] = useState<CellBackground>();

  useEffect(() => {
    if (value === 0) {
      setBackground("green");
    }

    if (value > 0) {
      setBackground("yellow");
    }

    return () => {
      setTimeout(() => setBackground(undefined), 250);
    };
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cx("w-6 h-6 text-center text-sm", {
        "bg-amber-100": background === "yellow",
        "bg-emerald-100": background === "green",
      })}
    >
      {/* Show not-breaking space to preserve cell size when empty */}
      {value > 0 ? value : "\u00A0"}
    </button>
  );
}
