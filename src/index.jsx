import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Todo from './todo';
import { LocaleProvider } from './context/localeContext';
import { TodoProvider } from './context/todoContext';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(
    <LocaleProvider>
        <TodoProvider>
            <Todo />
        </TodoProvider>
    </LocaleProvider>,
);

// // compoenent anme should start with upper case
// // return only single element
// // instead of class use className
// // for style use object instead of string and use camel case for key

// const newResult = 15;

// // Calculator.getDerivedStateFromProps = (props, state) => {
// //     return {
// //         result: newResult,
// //     };
// // };

// class Test extends Component {
//     state = {
//         result: 5,
//         name: 'rohit',
//     };

//     static getDerivedStateFromError(error) {
//         return {
//             error,
//         };
//     }

//     componentDidCatch(error, errorInfo) {
//         console.log(errorInfo);
//     }

//     render() {
//         const { error } = this.state;
//         if (error) return <h1>{error.message}</h1>;

//         return (
//             <>
//                 <button
//                     onClick={() =>
//                         this.setState((state, props) => {
//                             return { result: state.result + 1 };
//                         })
//                     }
//                 >
//                     Change Result
//                 </button>

//                 <button onClick={() => this.setState({ name: 'virat' })}>
//                     Change Name
//                 </button>
//                 <p style={{ color: 'red' }}>{this.state.result}</p>
//                 {this.state.result <= 10 && (
//                     <Calculator
//                         result={this.state.result}
//                         name={this.state.name}
//                     />
//                 )}
//             </>
//         );
//     }
// }

// // new Calculator({result: 5})
// root.render(<Test />);
