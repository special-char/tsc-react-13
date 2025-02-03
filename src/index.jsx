import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { LocaleProvider } from './context/localeContext';
import { TodoProvider } from './context/todoContext';
import Invoice from './invoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import DashboardTemplate from './templates/dashboard.template';
import Login from './pages/login';
import Register from './pages/register';
import AuthTemplate from './templates/auth.template';
import { AuthProvider } from './context/auth';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardTemplate />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="auth" element={<AuthTemplate />}>
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                {/* <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<RecentActivity />} />
                <Route path="project/:id" element={<Project />} />
            </Route> */}
            </Routes>
        </BrowserRouter>
    </AuthProvider>,
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
