import React, { Component, createRef } from 'react';
import Child1 from './child1';
import Child2 from './child2';

// Mounting
// -> Constuctor
// -> GetDerivedStateFromProps
// -> render
// -> componentDidMount

// Updating
// -> GetDerivedStateFromProps

// unMounting

// Error

export default class Calculator extends Component {
    // define state based on props
    constructor(props) {
        super(props);
        // this.state = {
        //     result: props.result,
        // };
        this.state = {
            todoTitle: '',
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            result: props.result,
            name: `Mr. ${props.name}`,
        };
    }

    mouseMove = () => {
        console.log('Mouse Moved');
    };

    async componentDidMount() {
        try {
            // document.addEventListener('mousemove', () => {
            //     console.log('hello mouse move');
            // });
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1',
            );
            const json = await res.json();
            this.setState({ todoTitle: json.title });

            // document.addEventListener('mousemove', this.mouseMove);

            // this.interval = setInterval(() => {
            //     console.log('hello world');
            // }, 1000);
        } catch (error) {}
    }

    componentWillUnmount() {
        // document.removeEventListener('mousemove', this.mouseMove);
        // clearInterval(this.interval);
    }

    number1 = createRef();
    number2 = createRef();
    operation = createRef();

    getResult = (e) => {
        e.preventDefault();

        const operationValue = this.operation.current.value;
        const number1Value = this.number1.current.value;
        const number2Value = this.number2.current.value;

        switch (operationValue) {
            case '+':
                return this.setState({
                    result: +number1Value + +number2Value,
                });
            case '-':
                return this.setState({
                    result: +number1Value - +number2Value,
                });
            case '/':
                return this.setState({
                    result: +number1Value / +number2Value,
                });
            case '*':
                return this.setState({
                    result: +number1Value * +number2Value,
                });

            default:
                return this.setState({ result: 0 });
        }
    };

    render() {
        const { result, todoTitle, name, error } = this.state;

        console.log('render');

        return (
            <>
                <form onSubmit={this.getResult}>
                    <p>{todoTitle}</p>
                    <p>{name}</p>
                    <Child1 result={result} />
                    <Child2 result={result} />
                    <div>
                        <label htmlFor="number1">Number 1</label>
                        <input type="text" id="number1" ref={this.number1} />
                    </div>
                    <div>
                        <label htmlFor="number2">Number 2</label>
                        <input type="text" id="number2" ref={this.number2} />
                    </div>
                    <div>
                        <label htmlFor="operation">Operator</label>
                        <select
                            name="operation"
                            id="operation"
                            ref={this.operation}
                        >
                            <option value="">Select Operation</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                            <option value="*">*</option>
                        </select>
                    </div>
                    <button type="submit">Get Result</button>
                </form>
                <p>{`Result is ${result}`}</p>
            </>
        );
    }
}
