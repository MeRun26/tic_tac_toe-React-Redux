// gameReducer.js
const initialState = {
	currentPlayer: "X",
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(""),
	message: "Ходит: X",
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_FIELD":
			return {
				...state,
				field: [...action.payload],
				message: "",
			};
		case "SET_MESSAGE":
			return {
				...state,
				message: action.payload,
			};
		case "RESET_GAME":
			return initialState;
		case "SET_IS_GAME_ENDED":
			return {
				...state,
				isGameEnded: action.payload,
			};
		case "SET_IS_DRAW":
			return {
				...state,
				isDraw: action.payload,
			};
		case "TOGGLE_PLAYER":
			return {
				...state,
				currentPlayer: state.currentPlayer === "X" ? "O" : "X",
			};
		default:
			return state;
	}
};

export default gameReducer;
