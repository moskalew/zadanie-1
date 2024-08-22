import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	// Императивный стиль: получение текущего года
	const currentYear = new Date().getFullYear(); // Здесь происходит императивное действие

	return (
		// Декларативный стиль: структура и логика UI
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <p>
					Edit <code>src/App.js</code> and save to reload.
				</p> */}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p className="App-year">{currentYear}</p>
			</header>
		</div>
	);
}

export default App;
