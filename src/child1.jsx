import React, { Component, PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare'; // E

export default class Child1 extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }

    throwError = () => {
        throw new Error('Hello world');
    };

    render() {
        console.log('render child 1');
        const { result } = this.props;
        if (result > 8) {
            throw new Error('something went wrong');
        }

        return (
            <>
                <div>Child1</div>
                <button onClick={this.throwError}>Throw Error</button>
                <p>{`Result in child 1: ${this.props.result}`}</p>
            </>
        );
    }
}
