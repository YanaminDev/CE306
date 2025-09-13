import React, { useState } from 'react'
import './CounterComponent.css'
const Counters: React.FC = () => {
    const [count, SetCount] = useState<number>(0)
    const increment = () => {
        SetCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            SetCount(count - 1)
        }

    }
    const reset = () => {
        SetCount(count - count)
    }
    return (
        <div>
            <h1>Counter Excercise - Solution</h1>
            <h1>{count}</h1>
            <div className='Button'>
                <button style={{ backgroundColor: 'green' }} onClick={increment}>+ incremnet</button>
                <button style={{ backgroundColor: 'red' }} onClick={decrement}>- decrement</button>
                <button style={{ backgroundColor: 'orange' }} onClick={reset}>🔄 reset</button>
            </div>
        </div>
    )
}

export default Counters
