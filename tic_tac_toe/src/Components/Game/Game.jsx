import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	updateField,
	setGameMessage,
	resetGame,
	setIsGameEnded,
	setIsDraw,
	togglePlayer,
} from "../Actions/gameActions";
import styles from "./Game.module.css";
import Field from "../Field/Field";
import Information from "../Information/Information";

const Game = () => {
	const dispatch = useDispatch();
	const { field, currentPlayer, isGameEnded, isDraw } = useSelector(
		(state) => state,
	);

	const handleCellClick = (index) => {
		if (!isGameEnded && !isDraw && field[index] === "") {
			const newField = [...field];
			newField[index] = currentPlayer;
			dispatch(updateField(newField));
			checkWinner(newField, currentPlayer);
		}
	};

	const handleRestart = () => {
		dispatch(resetGame());
	};

	const checkWinner = (currentField, player) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (
				currentField[a] === player &&
				currentField[b] === player &&
				currentField[c] === player
			) {
				dispatch(setGameMessage(`Победа: ${player}`));
				dispatch(setIsGameEnded(true));
				dispatch(setIsDraw(false));
				return;
			}
		}

		if (!currentField.includes("")) {
			dispatch(setGameMessage("НИЧЬЯ"));
			dispatch(setIsGameEnded(true));
			dispatch(setIsDraw(true));
			return;
		}

		const nextPlayer = player === "X" ? "O" : "X";
		dispatch(togglePlayer());
		dispatch(setGameMessage(`Ходит: ${nextPlayer}`));
	};

	useEffect(() => {
		// Пустой эффект
	}, []);

	return (
		<div className={styles.gameContainer}>
			<Information />
			<Field field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

export default Game;
