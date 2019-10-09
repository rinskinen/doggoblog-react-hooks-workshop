import React from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = React.useState(0);

    function buttonClickEventHandler(event) {}

    return (
        <div className="counter">
            <h1>Counter</h1>
            <input className="counter-value" value={count} readOnly />
            <div className="counter-controls">
                <button onClick={buttonClickEventHandler}>+ 1</button>
                <button>+ 5</button>
                <button>Reset</button>
                <button>Random</button>
                <button>- 5</button>
                <button>- 1</button>
            </div>
        </div>
    );
}

export default Counter;
