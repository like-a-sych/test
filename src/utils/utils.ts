function isCross(
	cell: { x: number; y: number },
	selected: { x: number; y: number } | null
) {
	if (selected === null) {
		return false;
	}

	const sameColumn = selected.x === cell.x;
	const sameRow = selected.y === cell.y;

	const nextOrPrevCol = selected.x === cell.x-1||selected.x === cell.x+1;
	const nextOrPrevRow = selected.y === cell.y - 1 || selected.y === cell.y + 1;

	return (sameColumn && nextOrPrevRow) || (sameRow && nextOrPrevCol);
}

export { isCross };
