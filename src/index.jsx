import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './components/App';
import Counter from './components/Counter';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));

// compoenent anme should start with upper case
// return only single element
// instead of class use className
// for style use object instead of string and use camel case for key

root.render(
    <>
        <App variant="green" label="Username" />
        <App variant="yellow" label="Password" />
        <App variant="red" label="gender" />
        <Counter />
    </>,
);
