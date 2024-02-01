import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import gameReducer from "./Components/Reducers/gameReducer";
import Game from "./Components/Game/Game";

const store = createStore(gameReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<Game />
	</Provider>,
);
