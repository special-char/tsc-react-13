import React from 'react';

const App = ({ variant, label }) => {
    return (
        <>
            <label
                className="label"
                style={{
                    backgroundColor: variant,
                }}
                htmlFor="username"
            >
                {label}
            </label>
            <input className="input" type="radio" id="username" />
        </>
    );
};

export default App;
