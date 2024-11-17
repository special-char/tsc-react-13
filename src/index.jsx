import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './components/App';
import Counter from './components/Counter';
import Calculator from './Calculator';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));

// compoenent anme should start with upper case
// return only single element
// instead of class use className
// for style use object instead of string and use camel case for key

// class Test extends Component {
//     state = {
//         name: 'virat',
//     };

//     render() {
//         return (
//             <>
//                 <button onClick={() => this.setState({ name: 'Rohit' })}>
//                     Change Name
//                 </button>
//                 <p style={{ color: 'red' }}>{this.state.name}</p>
//                 <Counter count={1} name={this.state.name} />
//             </>
//         );
//     }
// }

root.render(<Calculator />);
