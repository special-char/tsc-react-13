import React, { Component, createRef } from 'react';

export default class Calculator extends Component {
    state = {
        result: 0,
    };

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
        const { result } = this.state;

        console.log('render');

        return (
            <>
                <form onSubmit={this.getResult}>
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
