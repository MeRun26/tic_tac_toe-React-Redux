import React from "react";
import styles from "./Field.module.css";
import { useSelector } from "react-redux";

const Field = ({ handleCellClick }) => {
	const field = useSelector((state) => state.field);

	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ""}
					className={`${styles.cell} ${cell === "X" ? styles.x : ""} ${
						cell === "O" ? styles.o : ""
					}`}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

export default Field;
