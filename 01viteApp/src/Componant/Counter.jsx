
import React from 'react';

const Counter = () => {

    const [count, setCount] = React.useState(0);

    const increment = () => {

        if (count >= 20) {
            alert("Counter can't be less than 20");
        }
        setCount(count + 1);
    }
    const decrement = () => {
        if (count <= 0) {
            alert("Counter can't be less than 0");
            return;
        }
        setCount(count - 1);
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}> Counter: {count}</h2>
            <button style={{ textAlign: 'center' }} onClick={increment}> Increment</button>
            <button style={{ textAlign: 'center' }} onClick={decrement}> Increment</button>

        </div>
    )
}

export default Counter
