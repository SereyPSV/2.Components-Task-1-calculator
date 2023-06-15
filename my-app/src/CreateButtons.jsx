import React from 'react';

import { useState } from 'react';
import { CreateButtons, ExecutingLogic, checkEquals } from './Utils';
import styles from './CreateButtons.module.css';

const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbol = ['C', '+', '-', '='];
let equals = true;

export const CreateCalculator = () => {
	const [value, setValue] = useState('0');
	const onClick = (item) => {
		item.target.textContent === '=' ? (equals = false) : (equals = true); // замена цвета
		const output = ExecutingLogic(item.target.textContent);
		setValue(output);
	};

	const NumberButtons = () => CreateButtons(number);
	const SymbolButtons = () => CreateButtons(symbol);
	return (
		<div className={styles.calculator}>
			<div className={equals ? styles.outputWindow : styles.outputWindowСolor}>
				{checkEquals(value)}
			</div>
			<div className={styles.buttons} onClick={onClick}>
				<div className={styles.numberButtons}>
					<NumberButtons />
				</div>
				<div className={styles.symbolButtons}>
					<SymbolButtons />
				</div>
			</div>
		</div>
	);
};
