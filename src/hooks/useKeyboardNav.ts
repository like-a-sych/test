import { useEffect } from "react";

import type { useKeyboardProps } from "../types/types";

export function useKeyboardNav({
	coordinate,
	index,
	rows,
	columns,
	onClick,
}: useKeyboardProps) {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (coordinate === null) {
				return;
			}
			if (e.key === "ArrowLeft") {
				if (coordinate.x - 1 < 0) {
					return;
				}
				onClick(index - 1);
			}
			if (e.key === "ArrowRight") {
				if (coordinate.x + 1 > columns - 1) {
					return;
				}
				onClick(index + 1);
			}
			if (e.key === "ArrowUp") {
				if (coordinate.y - 1 < 0) {
					return;
				}
				onClick(index - columns);
			}
			if (e.key === "ArrowDown") {
				if (coordinate.y + 1 > rows - 1) {
					return;
				}
				onClick(index + columns);
			}
		};
		window.addEventListener("keydown", handler);
		return () => {
			window.removeEventListener("keydown", handler);
		};
	}, [coordinate, index, columns, rows, onClick]);
}
