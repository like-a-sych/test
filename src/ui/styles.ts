import styled, { css } from "styled-components";
import type { GridProps, SquareProps } from "../types/types";

const Grid = styled.div<GridProps>`
	display: grid;
	gap: 5px;
	grid-template-columns: repeat(${({ $columns }) => $columns}, min-content);
`;

const Square = styled.div<SquareProps>`
	height: 64px;
	width: 64px;
	background-color: ${props => (props.$selected ? "green" : "red")};

	${props =>
		props.$disabled &&
		!props.$isCross &&
		css`
			background-color: gray;
			pointer-events: none;
		`};

	&:hover {
		background-color: blue;
		cursor: pointer;
	}
`;

export { Grid, Square };
