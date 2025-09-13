-CounterComponent จะ import useState เเละ React
สร้าง Functional Component  มีชื่อว่า Counters ภายในฟังค์ชั่นเราจะสร้าง count ที่เป็นตัวเเปรเก็บ state  โดยมีค่าเริ่มต้นคือ 0 เเละเป็น type number ซึ่งถูกกำหนดด้วย useState เเล้วมี function setCount โดยใช้สำหรับ sey ค่าให้กับ count 
สร้างfunction incremnet ที่จะเรียก  setCount มาบวกค่า ให้กับ count บวกทีละ 1 ถ้ามีการกด button
สร้าง function decrement ที่จะเรียก setCount มาลบค่า count ทีละ 1 ถ้ามีการกด button
สร้าง function reset ทีจะเรียก setCount เพื่อกำหนดค่า count ให้กลับเป็น 0 จากการกด button
จากนั้นจะ return  เป็นhtml element โดยให้เเสงค่าเลขปัจจุบันซึ่งใช้ h1
เเละสร้าง div ที่ด้านในมึปุ่มสามอันได้เเก่
ปุ่ม 1 increment ถ้ากดจะเรียกฟังค์ชั่น increment
ปุ่ม 2 decrement ถ้ากดจะเรียกฟังค์ชั่น decrement
ปุ่ม 3 reset ถ้ากดจะเรียกฟังค์ชั่น reset
เเละตกเเต่งด้วย css เพิ่มเติม

- FormComponent จะ import useState เเละ React
มี interface มีชื่อว่า FormData ที่จะกำหนดค่าให้กับ function Component สองค่าคือ  name , email 
สร้าง function component ที่มีชื่อว่า UserForm ซึ่งรับค่าจาก interface FormData 
สร้าง  name1 ที่ใช้ useState โดยมี type คือ string โดยให้มีค่าเริ่มต้นเป็น name จาก interface FormData โดยมี functiom  SetName กำหนดค่าให้กับ name1
สร้าง email1 ที่ใช้ useState โดยมี type คือ string โดยให้ค่าเริ่มต้นเป็น email1 จาก interface Form Data โดยมี functiom  SetEmail กำหนดค่าให้กับ email1
function alert1 จะถูกเรียกเมื่อมีการกดปุ่ม summit เเล้วจะเเสดง alert โดยเเสดงค่า name1  เเละ email1 โดยมีเงื่อนไขเเสดง alert คือ  name1 เเละ  email1 จะต้องไม่เป็นค่าว่าง
function setClear ที่จะทำให้ค่าของ name1 และ email1 เป็นค่าว่าง
return 
สร้าง form ท
จะมีการสร้าง input ที่จะมีการ onChange ที่จะเปลี่ยนค่าตัวเเปร Real time โดยมีการเรียกใช้ SetName เเละ SetEmail เพื่อเปลี่ยนเเปลงค่า  name1 และ  email1
สร้าง div ที่ด้านในมีปุ่ม 2 เเบบ
- summit ที่มี type summit ซึ่ง summit ของ form จะไปเรียกใช้ alert1 เพื่อเเสดงข้อมูล
- ปุ่ม Clear ที่เป็น type button ที่จะไปเรียกฟังค์ชั่น setClear

สร้าง div Current-Data ที่จะเเสดงค่าของ name1 ,email1 ปัจจุบัน