import React from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = React.useState(Number(localStorage.getItem('count')) || 0);

    const setValidCount = value => {
        const newValue = count + value;

        if (newValue < 0) {
            return setCount(0);
        }
        if (newValue > 25) {
            return setCount(25);
        }

        return setCount(newValue);
    };

    React.useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);

    return (
        <div className="demo-counter">
            <h1>Counter</h1>
            <input className="demo-counter-value" value={count} readOnly />
            <div className="demo-counter-controls">
                <button onClick={() => setValidCount(1)}>+ 1</button>
                <button onClick={() => setValidCount(5)}>+ 5</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(Math.round(Math.random() * 25))}>Random</button>
                <button onClick={() => setValidCount(-5)}>- 5</button>
                <button onClick={() => setValidCount(-1)}>- 1</button>
            </div>
        </div>
    );
}

export default Counter;
