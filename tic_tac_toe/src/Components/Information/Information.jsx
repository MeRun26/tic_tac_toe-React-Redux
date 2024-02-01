import React from "react";
import styles from "./Information.module.css";
import { useSelector } from "react-redux";

const Information = () => {
	const message = useSelector((state) => state.message);

	return (
		<div className={styles.infoContainer}>
			<p className={styles.gameInfo}>{message}</p>
		</div>
	);
};

export default Information;
