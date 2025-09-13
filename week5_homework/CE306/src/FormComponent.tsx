import React, { useState } from 'react'
import './FormComponent.css'
interface FromData {
    name: string;
    email: string;
}

const UserForm: React.FC<FromData> = ({ name, email }) => {
    const [name1, SetName] = useState<string>(name);
    const [email1, SetEmail] = useState<string>(email)

    const alert1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name1 != "" && email1 != '') {

            alert(`Name : ${name1} \nEmail : ${email1}`)
        }
    }

    const setClear = () => {

        SetName(''); SetEmail('')



    }

    return (
        <div className='container'>
            <h1>User Form Exercise - Solution</h1>
            <form action="" onSubmit={alert1}>
                <h3>ชื่อ</h3>
                <input type="text" value={name1} onChange={(e) => SetName(e.target.value)} placeholder='กรอกชื่อของคุณ' />
                <h3>อีเมล</h3>
                <input type="text" value={email1} onChange={(e) => SetEmail(e.target.value)} placeholder='กรอกอีเมลของคุณ' /> 

                <div className='Button-Form'>
                    <button type="submit" style={{ backgroundColor: "green" }}>Submit</button>
                    <button type='button' style={{ backgroundColor: 'red' }} onClick={setClear}>Clear</button>
                </div>
            </form>

            <div className='Current-Data'>
                <h2>ข้อมูลปัจจุบัน:</h2>
                <h4>ชื่อ {name1? name1 : 'ยังไม่ได้กรอก'}</h4>
                <h4>อีเมล {email1? name1 : 'ยังไม่ได้กรอก'}</h4>
            </div>
        </div>

    )
}
export default UserForm