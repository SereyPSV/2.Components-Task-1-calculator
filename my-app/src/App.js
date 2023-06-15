import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { CreateCalculator } from './CreateButtons';

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<img src={logo} className={styles.logo} alt="logo" />
				<CreateCalculator />
			</header>
		</div>
	);
};
