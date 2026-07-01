import { Square } from "../ui/styles";

import type { SquareCellProps } from "../types/types";

export function SquareCell({
	selected,
	disabled,
	isCross,
	onClick,
}: SquareCellProps) {
	return (
		<Square
			$selected={selected}
			$disabled={disabled}
			$isCross={isCross}
			onClick={onClick}
		></Square>
	);
}
