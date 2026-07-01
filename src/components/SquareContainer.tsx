import { useCallback, useMemo, useState } from "react";
import { Grid } from "../ui/styles";
import { SquareCell } from "./SquareCell";
import { calcCoordinates, isCross } from "../utils/utils";
import { useKeyboardNav } from "../hooks/useKeyboardNav";

import type { SquareContainerProps } from "../types/types";

export function SquareContainer({ rows, columns }: SquareContainerProps) {
	const [currentSelectedSquareIndex, setCurrentSelectedSquareIndex] =
		useState<number>(null);
	const [coordinate, setCoordinate] = useState<{ x: number; y: number }>(null);

	const cells = useMemo(
		() => Array.from({ length: rows * columns }),
		[rows, columns]
	);

	const onClick = useCallback(
		(index: number) => {
			setCoordinate(calcCoordinates(index, columns));

			if (index === currentSelectedSquareIndex) {
				setCurrentSelectedSquareIndex(null);
			} else {
				setCurrentSelectedSquareIndex(index);
			}
		},
		[columns, currentSelectedSquareIndex]
	);

	useKeyboardNav({
		coordinate,
		index: currentSelectedSquareIndex,
		rows,
		columns,
		onClick,
	});

	return (
		<Grid $columns={columns}>
			{cells.map((_, indexCell) => {
				return (
					<SquareCell
						key={indexCell}
						selected={currentSelectedSquareIndex === indexCell}
						disabled={
							currentSelectedSquareIndex !== null &&
							currentSelectedSquareIndex !== indexCell
						}
						isCross={isCross(indexCell, coordinate, columns)}
						onClick={() => onClick(indexCell)}
					/>
				);
			})}
		</Grid>
	);
}
