import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	// Императивный стиль: получение текущего года
	const currentYear = new Date().getFullYear(); // Здесь происходит императивное действие

	// Декларативный стиль: структура и логика UI
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),

			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('p', { className: 'App-year' }, currentYear),
		),
	);
}

export default App;
