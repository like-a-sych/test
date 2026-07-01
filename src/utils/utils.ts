function calcCoordinates(index: number, columns: number) {
	return {
		x: index % columns,
		y: Math.floor(index / columns),
	};
}

function isCross(
	index: number,
	coordinate: { x: number; y: number },
	columns: number
) {
	if (coordinate === null) {
		return false;
	}

	const { x, y } = calcCoordinates(index, columns);

	if (
		coordinate.x === x &&
		(coordinate.y === y - 1 || coordinate.y === y + 1)
	) {
		return true;
	}

	if (
		coordinate.y === y &&
		(coordinate.x === x - 1 || coordinate.x === x + 1)
	) {
		return true;
	}

	return false;
}

export { calcCoordinates, isCross };
