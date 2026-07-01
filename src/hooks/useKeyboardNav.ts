import { useEffect } from "react";

import type { useKeyboardProps } from "../types/types";

export function useKeyboardNav({
	selected,
	rows,
	columns,
	onClick,
}: useKeyboardProps) {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (selected === null) {
				return;
			}
			if (e.key === "ArrowLeft" && selected.x > 0) {
				onClick({ x: selected.x - 1, y: selected.y });
			}
			if (e.key === "ArrowRight" && selected.x < columns - 1) {
				onClick({ x: selected.x + 1, y: selected.y });
			}
			if (e.key === "ArrowUp" && selected.y > 0) {
				onClick({ x: selected.x, y: selected.y - 1 });
			}
			if (e.key === "ArrowDown" && selected.y < rows - 1) {
				onClick({ x: selected.x, y: selected.y + 1 });
			}
		};
		window.addEventListener("keydown", handler);
		return () => {
			window.removeEventListener("keydown", handler);
		};
	}, [selected, columns, rows, onClick]);
}
