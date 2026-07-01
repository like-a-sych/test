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
	selected: { x: number; y: number } | null;
	rows: number;
	columns: number;
	onClick: ({x,y}: {x:number,y:number}) => void;
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
