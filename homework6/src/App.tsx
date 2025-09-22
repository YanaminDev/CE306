// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// import Button from './components/Button';

// import ProductCard from './components/ProductCard'

import Navbar from './components/Navbar'


function App() {
  // const handleButtonClick = (type: string) => {
  //   alert(`${type} button Clicked!`);
  // }

  return (
    // <div className='flex flex-row gap-10 flex-wrap justify-center'>
    //   <ProductCard imageUrl='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e783e052-9360-4afb-adb8-c4e9c0f5db07/NIKE+AIR+MAX+NUAXIS.png' title='Air Force 1' description='สบาย ทนทาน เหนือกาลเวลา นั่นคือเหตุผลที่ทำให้คู่นี้เป็นไอเท็มอันดับ 1 ที่คนยอมรับ โครงสร้างสุดคลาสสิกจากยุค 80 จับคู่กับรายละเอียดโดดเด่นเพื่อนำเสนอสไตล์ที่ดูดีไม่มีแผ่วไม่ว่าจะอยู่ในคอร์ทหรืออยู่ที่ไหน' price = {3200} ></ProductCard>
    //   <ProductCard imageUrl='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8ecc919-b1f0-40d6-8f1d-b040480424c9/W+NIKE+V2K+RUN.png' title='Nike V2K Run' description='จะมุ่งสู่อนาคต หรือย้อนกลับสู่อดีตดีนะ ไม่สำคัญหรอก เพราะรองเท้าคู่นี้จะนำพาสไตล์ย้อนยุคไปสู่อนาคต V2K ปรับโฉมใหม่ให้กับทุกสิ่งที่คุณรักในรุ่น Vomero ในลุคที่ถอดแบบมาจากแค็ตตาล็อกสไตล์นักวิ่งช่วงต้นยุค 2000 ถึงสมัยปัจจุบัน' price = {4700} ></ProductCard>
    //   <ProductCard imageUrl='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29b9c079-925f-4838-b401-be480afe5ede/W+NIKE+AM+DN8.png' title='Nike Air Max Dn8' description='Air มากขึ้น เทอะทะน้อยลง Dn8 นำระบบ Dynamic Air ของเรามาย่อส่วนแล้วติดตั้งลงในแพ็คเกจทรงกว้างบางที่โฉบเฉี่ยว คู่นี้มาพร้อมท่อ Air อัดแรงดัน 8 ท่อเพื่อการตอบสนองที่ว่องไวทุกๆ ก้าว สัมผัสประสบการณ์การเคลื่อนไหวเหนือจริง' price = {6600} ></ProductCard>
   
    // </div>

    <Navbar  title= 'เนื้อหาหลักของหน้าเว็บ'>นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar</Navbar>
  )
}

export default App
