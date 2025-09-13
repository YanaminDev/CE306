import React, { useState } from 'react';
interface CountProps {
    initialCount?: number
}


const Counter: React.FC<CountProps> = ({ initialCount = 0 }) => {
    const [count, SetCount] = useState<number>(initialCount)
    const [name, SetName] = useState<string>('')
    const increment = () => {
        SetCount(prevcount => prevcount + 1);
    }
    const decrement = () => {
        SetCount(count - 1)
    }
    const multiply = () => {
        SetCount(count * count)
    }
    const setZero = () => {
        SetCount(count - count)
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={multiply}>multiply with itself</button>
            <button onClick={setZero}>Set Zeto</button>

            <h2>Your Name : {name}</h2>
            <input type='text' value={name} onChange={(e) => SetName(e.target.value)}></input>
        </div>
    )
}

export default Counter