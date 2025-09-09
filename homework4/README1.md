1.SkillTag สร้าง function skillPropsโดยมี export ออกไปด้วยเพื่อเอาไปใช้ในลูปสร้าง tag ใน UserProfileCard  
ใน function จะมี 2 ค่าคือ  SkillName เเละ level ที่จะใส่หรือไม่ใส่ก็ได้

React Functional Component ของ skilltag มาสร้าง tag ขึ้นมาแล้ว export componentใส่ไว้ใน UserProfileCard 

2.UserProfilecard จะมี interface เป็น  userid(เเสดงเมื่อกดปุ่ม) email(เเสดงอีเมลล์ string)  name(เเสดงชื่อ string)  avatarUrl(จะมีหรือไม่มีก็ได้ถ้าไม่มีจะเป็นรูป dummy)  isOnline(boolean ถ้าเป็น true เเสดงว่า online ถ้าเป็น false เเสดงว่า offline) skills(เป็น arrey type ของ skillProps) onViewDetails(เป็นตัวเเปรเก็บ function มีพารามิเตอร์คือ string หรือ number)

React Functional Component คือ UserProfileCard จะรับค่าจาก interface มา นำมาสร้างการ์ด โดยมีการimport UPC.css เป็นเพื่อตกเเต่งการ์ด ในการสร้างการ์ดจะมีการ import skilltag มาเเล้ว นำskill ที่เป็น array มา map เเล้วสร้าง component skilltag ข้างใน UserProfileCard 

3.ในหน้า App.tsx เราจะเตรียมข้อมูลในรูปเเบบ arrey ชื่อ people ที่มี object ข้อมูล ข้างใน object จะมี ตัวเเปรตาม interface ของ UserProfilecard 
มรการ import  Component UserProfileCard
function App ข้างใน จะนำ people มา map loop สร้าง  Component UserProfileCard เเล้ว export ไปเเสดงที่หนเ้า index.html เเละใน function App จะมีตัวเเปร handleViewDetails มีพารามิเตอร์คือ userid เเละที่ด้านในเป็น function จะให้มีการเเสดง alert เเสดงผลค่า userid เมื่อมีการกด button ใน  UserProfileCard (นำ handleViewDetails ไปใส่เป็นค่าของ onViewDetails ซึ่ง onViewDetails จะเรียกใช้ค่าเมื่อมีการกดที่ button)