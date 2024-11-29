import React, { memo } from 'react';

const Child2 = ({ result }) => {
    console.log('render child 2');
    return (
        <>
            <div>Child1</div>
            <p>{`Result in child 1: ${result}`}</p>
        </>
    );
};

export default memo(Child2);
