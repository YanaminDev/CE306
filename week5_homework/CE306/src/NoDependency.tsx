import React, { useEffect, useState } from 'react'

const NoDependency: React.FC = () => {
    const [count, SetCount] = useState<number>(0);
    const [name, SetName] = useState<string>('');

    //effect นี้จะทำงานทุกครั้งที่ nodependencyEffect component re-render ไม่ว่าจะเป็น count หรือ name เปลี่ยนเเปลง
    useEffect(() => {
        console.log('No Dependency Effect : Component re-rendered');
        console.log(`Current Count : ${count} ,Name : ${name}`)

    })
    return (
        <div>
            <h2>No Dependency Array Example</h2>
            <p>Count : {count}</p>
            <button onClick={() => SetCount(prevCount => prevCount + 1)}>incremnet Count</button>
            <br />
            <p>Name {name}</p>
            <input type="text"
                value={name}
                onChange={(e) => SetName(e.target.value)}
                placeholder='Enter Your Name'

            />
            {/* <input type="text" 
                value={name}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder='Enter Your Name'

            /> */}

        </div>
    )
}
export default NoDependency