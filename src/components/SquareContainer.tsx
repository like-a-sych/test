import { useCallback, useMemo, useState } from "react";
import { Grid } from "../ui/styles";
import { SquareCell } from "./SquareCell";
import { isCross } from "../utils/utils";
import { useKeyboardNav } from "../hooks/useKeyboardNav";

import type { SquareContainerProps } from "../types/types";

export function SquareContainer({ rows, columns }: SquareContainerProps) {
	const [selected, setSelected] = useState<{ x: number; y: number } | null>(
		null
	);

	const cells = useMemo(() => {
		const result: { x: number; y: number }[] = [];

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < columns; x++) {
				result.push({ x, y });
			}
		}
		return result;
	}, [rows, columns]);

	const onClick = useCallback((cell: { x: number; y: number }) => {
		setSelected(prev =>
			prev?.x === cell.x && prev?.y === cell.y ? null : cell
		);
	}, []);

	useKeyboardNav({
		selected,
		rows,
		columns,
		onClick,
	});

	return (
		<Grid $columns={columns}>
			{cells.map(({ x, y }) => {
				const selectedCell = selected?.x === x && selected?.y === y;
				return (
					<SquareCell
						key={y * columns + x}
						selected={selectedCell}
						disabled={
							selected !== null && !selectedCell
						}
						isCross={isCross({ x, y }, selected)}
						onClick={() => onClick({ x, y })}
					/>
				);
			})}
		</Grid>
	);
}
