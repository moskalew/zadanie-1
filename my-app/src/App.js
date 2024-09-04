import React, { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Состояния для шагов и активного индекса
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// Флаги для проверки первого и последнего шага
	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	// Обработчик для перехода к следующему шагу
	const handleNext = () => {
		if (isLastStep) {
			setActiveIndex(0); // Начать сначала
		} else {
			setActiveIndex((prevIndex) => prevIndex + 1);
		}
	};

	// Обработчик для перехода к предыдущему шагу
	const handlePrev = () => {
		if (!isFirstStep) {
			setActiveIndex((prevIndex) => prevIndex - 1);
		}
	};

	// Обработчик для установки конкретного шага
	const handleStepClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Выводим контент активного шага */}
						<h2>{steps[activeIndex].title}</h2>
						<p>{steps[activeIndex].content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводим список шагов */}
						{steps.map((step, index) => {
							const isActive = index === activeIndex;
							const isDone = index <= activeIndex;

							return (
								<li
									key={step.id}
									className={`${styles['steps-item']} ${isDone ? styles.done : ''} ${isActive ? styles.active : ''}`}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => handleStepClick(index)}
									>
										{index + 1}
									</button>
									{step.title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handlePrev}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNext}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
