
import React from 'react';

const Counter = () => {

    const [count, setCount] = React.useState(0);

    const increment = async () => {

        if (count >= 20) {
            alert("Counter can't be less than 20");
            return;
        }
        setCount(count + 1);
    }
    const decrement = async () => {
        if (count <= 0) {
            alert("Counter can't be less than 0");
            return;
        }
        setCount(count - 1);
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}> Counter: {count}</h2>
            <button className='btn btn-primary' style={{ textAlign: 'center' }} onClick={increment}> Increment</button>
            <button className='btn btn-danger' style={{ textAlign: 'center' }} onClick={decrement}> Decrement</button>

        </div>
    )
}

export default Counter
