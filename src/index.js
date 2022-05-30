// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import * as React from './mini-react';

const element = React.createElement(
	'div',
	{
		id: 'hw',
		title: 'hello-world',
		style: {
			width: '100px',
			height: '50px',
			color: 'green',
			textAlign: 'center',
			border: '1px solid pink',
		},
	},
	'Hello World',
	React.createElement(
		'a',
		{ href: 'www.google.com', style: { color: 'red', marginLeft: '100px' } },
		React.createElement(
			'h3',
			{ id: 'hehe-h3' },
			React.createElement('div', { id: 'inner-div' })
		)
	)
);

console.log('element = ', element);

const container = document.querySelector('#root');
React.render(element, container);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
