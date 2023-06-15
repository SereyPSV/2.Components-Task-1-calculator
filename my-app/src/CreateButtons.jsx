import React from 'react';
import { useState } from 'react';
import { ExecutingLogic, checkEquals } from './Utils';
import styles from './CreateButtons.module.css';

let equals = true;

export const CreateCalculator = () => {
	const [value, setValue] = useState('0');
	const onClick = (item) => {
		item.target.textContent === '=' ? (equals = false) : (equals = true); // замена цвета
		const output = ExecutingLogic(item.target.textContent);
		setValue(output);
	};
	return (
		<div className={styles.calculator}>
			<div className={equals ? styles.outputWindow : styles.outputWindow1}>
				{checkEquals(value)}
			</div>
			<div className={styles.buttons} onClick={onClick}>
				<div className={styles.numberButtons}>
					<button className={styles.button}>1</button>
					<button className={styles.button}>2</button>
					<button className={styles.button}>3</button>
					<button className={styles.button}>4</button>
					<button className={styles.button}>5</button>
					<button className={styles.button}>6</button>
					<button className={styles.button}>7</button>
					<button className={styles.button}>8</button>
					<button className={styles.button}>9</button>
					<button className={styles.buttonBottom}>0</button>
				</div>
				<div className={styles.symbolButtons}>
					<button className={styles.button}>C</button>
					<button className={styles.button}>+</button>
					<button className={styles.button}>-</button>
					<button className={styles.button}>=</button>
				</div>
			</div>
		</div>
	);
};
