type SquareContainerProps = {
	rows: number;
	columns: number;
};
type SquareCellProps = {
	selected: boolean;
	disabled: boolean;
	isCross: boolean;
	onClick: () => void;
};

type useKeyboardProps = {
	coordinate: { x: number; y: number };
	index: number;
	rows: number;
	columns: number;
	onClick: (i: number) => void;
};
//ui styles
type GridProps = {
	$columns: number;
};
type SquareProps = {
	$selected?: boolean;
	$disabled: boolean;
	$isCross: boolean;
};

export type {
	SquareContainerProps,
	SquareCellProps,
	useKeyboardProps,
	GridProps,
	SquareProps,
};
