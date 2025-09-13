

import React, { useEffect, useState } from 'react'

const EmptyDependency: React.FC = () => {
    const [count, SetCount] = useState<number>(0);
    const [name, SetName] = useState<string>('');


    useEffect(() => {
        console.log('Empty Dependency Effect :Component Mounted!');

    }, []); // <-- EmptyDependency effect นี้จะทำงานเพียงครั้งเดียวเมื่อ component ถูฏ mount เเตกต่างเเค่เพิ่ม ,[] ก่อนวงเล็บปิด
    return (
        <div>
            <h2>EmptyDependency</h2>
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
export default EmptyDependency