// gameActions.js
export const updateField = (newField) => {
	return {
		type: "UPDATE_FIELD",
		payload: newField,
	};
};

export const setGameMessage = (message) => {
	return {
		type: "SET_MESSAGE",
		payload: message,
	};
};

export const resetGame = () => {
	return {
		type: "RESET_GAME",
	};
};

export const setIsGameEnded = (isGameEnded) => {
	return {
		type: "SET_IS_GAME_ENDED",
		payload: isGameEnded,
	};
};

export const setIsDraw = (isDraw) => {
	return {
		type: "SET_IS_DRAW",
		payload: isDraw,
	};
};

export const togglePlayer = () => {
	return {
		type: "TOGGLE_PLAYER",
	};
};
