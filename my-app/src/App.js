import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [display, setDisplay] = useState('');
	const [result, setResult] = useState(null);
	const [isResult, setIsResult] = useState(false);

	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const handleNumberClick = (number) => {
		if (isResult) {
			setDisplay(number);
			setIsResult(false);
		} else {
			setDisplay(display + number);
		}
	};

	const handleOperationClick = (operation) => {
		if (isResult) {
			setDisplay(result + operation);
			setIsResult(false);
		} else {
			setDisplay(display + operation);
		}
	};

	const handleEqualsClick = () => {
		try {
			const evaluatedResult = eval(display);
			setResult(evaluatedResult);
			setDisplay(evaluatedResult.toString());
			setIsResult(true);
		} catch (error) {
			setDisplay('Error');
		}
	};

	const handleResetClick = () => {
		setDisplay('');
		setResult(null);
		setIsResult(false);
	};

	return (
		<div className={styles.calculator}>
			<div className={`${styles.display} ${isResult ? styles.result : ''}`}>
				{display}
			</div>
			<div className={styles.buttons}>
				<div className={styles.numberButtons}>
					{numbers.map((number) => (
						<button
							key={number}
							className={`${styles.button} ${number === '0' ? styles.zeroButton : ''}`}
							onClick={() => handleNumberClick(number)}
						>
							{number}
						</button>
					))}
				</div>
				<div className={styles.operationButtons}>
					<button className={styles.button} onClick={handleResetClick}>
						C
					</button>
					<button
						className={styles.button}
						onClick={() => handleOperationClick('-')}
					>
						-
					</button>
					<button
						className={styles.button}
						onClick={() => handleOperationClick('+')}
					>
						+
					</button>
					<button className={styles.button} onClick={handleEqualsClick}>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
