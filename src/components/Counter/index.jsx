import React, { Component } from 'react';

class Counter extends Component {
    state = {
        data: 0,
        name: 'yagnesh',
    };

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button
                    onClick={() => {
                        // this.state.data += 1;
                        this.setState({ data: 1, name: 'rohit' });
                    }}
                    className="py-2 px-6 bg-blue-400 rounded-md text-white text-xl m-4"
                >
                    +
                </button>
                <p className="text-3xl">{this.state.data}</p>
                <button
                    onClick={() => {
                        data -= 1;
                    }}
                    className="py-2 px-6 bg-blue-400 rounded-md text-white text-xl m-4"
                >
                    -
                </button>
            </div>
        );
    }
}

// import React from 'react';

// const Counter = () => {
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     data += 1;
//                 }}
//                 className="py-2 px-6 bg-blue-400 rounded-md text-white text-xl m-4"
//             >
//                 +
//             </button>
//             <p className="text-3xl">{data}</p>
//             <button
//                 onClick={() => {
//                     data -= 1;
//                 }}
//                 className="py-2 px-6 bg-blue-400 rounded-md text-white text-xl m-4"
//             >
//                 -
//             </button>
//         </div>
//     );
// };

export default Counter;
