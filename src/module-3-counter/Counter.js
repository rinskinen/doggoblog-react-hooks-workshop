import React from 'react';
import './Counter.css';
import DoggoIcon from './DoggoIcon';

function Counter() {
    const [count, setCount] = React.useState(0);

    function addOne(event) {
        setCount(count + 1)
    }

    function addFive(event) {
        setCount(count + 5)
    }

    function substractOne(event) {
        setCount(count - 1)
    }

    function substractFive(event) {
        setCount(count - 5)
    }

    function reset(event) {
        setCount(count - count)
    }

    function random(event) {
        setCount(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div className="counter">
            <h1>How many doggos?</h1>
            <input className="counter-value" value={count} readOnly />
            <div className="counter-controls">
                <button onClick={addOne}>+ 1</button>
                <button onClick={addFive}>+ 5</button>
                <button onClick={reset}>Reset</button>
                <button onClick={random}>Random</button>
                <button onClick={substractFive}>- 5</button>
                <button onClick={substractOne}>- 1</button>
            </div>
            <DoggoIcon />
        </div>
    );
}

export default Counter;
