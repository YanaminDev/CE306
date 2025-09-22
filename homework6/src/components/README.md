
6.1
import Button จากที่ทำในชั่วโมงเรียน
สร้าง interface ProductCardProps ที่รับค่า  imageUrl เป็น string , title  เป็น string ,   description เป็น string , เเละ price เป็น number
จากนั้นสร้าง React Component ที่มีชื่อว่า ProductCard โดยรับค่าจาก interface ProductCardProps โดยเอาทุกค่ามาทำเป็นการ์ด ตกเเต่งโดย tailwind
สร้างฟังค์ชั่นมีชื่อว่า onAddToCart ที่จะเเสดง alert ค่า เมื่อมีการกด Button ที่ import มา
return
สร้าง div ครอบใหญ่สุดเพื่อบ่งบอกว่าเป็น card เเล้วตกเเต่งด้วย tailwind มีการกำหนดขนาดความกว้างการ์ดคงที่ 360px เมื่อResponsiveเท่ากับ768px ขึ้นไป โดยใช้โค้ด 
md:w-[360px] เเละกำหนดความสูงเมื่อขนาด Responsive 768px ขึ้นไป  โดยใช้โค้ด md:h-[600px] เเต่ขนาด default หรือขนาดที่น้อยกว่า 768px มีความ w-full  h-full หรือเต็มความกว้าง เเละกำหนดให้การ์ดเป็น flex เเละ flex-col เพื่อให้ทุก element ในdiv เเสดงเป็นเเถวเเนวตั้ง ตั้งเป็น flex-warp เมื่อหน้าจอเล็กลงถึงจะปิดไอเทมอันใเอันนึงให้ตบบรรทัดลงมา
กำหนดขอบเงาให้กับการ์ดโดยใช้คำสั่ง shadow-xl เเละ rounded-xl เพื่อกำหนดขอบมน
นำค่า imageUrl ,มาเเสดงใน tag img โดยให้มีการเปรียบเทียบกับภาพพื้นหลังปกติ ถ้ากรณีไม่มีภาพส่งมาให้ใช้ภาพพื้นหลังปกติ เเละกำหนดค่ากว้างสูงของรูปภาพ
นำค่า title description เเละ price มาเเสดงใน tag p โดยตกเเต่งให้สวยงามด้วย tailwind
เรียกใช้ Button element โดยมีค่า variant='primary' size='lg' ตามโจทย์กำหนด
จากนั้น export default ProductCard เเล้วนำไปเเสดงใน App.tsx


6.2
import useState เเละ React
interface Content กำหนดค่าที่จะส่งไป Component โดยมี title เป็น string เเละ children: React.ReactNode; หรือข้อมูลใน tag
สร้าง React Component Navbar โดยรับค่า props จาก Content
ด้านในสร้างตัวเเปร open ที่เป็น useState โดยมีค่าเริ่มต้นคือ false เอาไว้เช็คว่าเป็น true หรือ false ถ้าเป็นจริงตัวเเปร button ,มีค่าเป็น x เพราะเเสดงว่ากดปุ่มเเสดง link side tab อยู่ในตอนนั้น เเต่ถ้าเป็นfalse  ก็เเสดงว่าตอนนั้นไม่ได้เเสดง link side tab ก็ให้ button มีค่าเท่ากับ ☰ 
ตัวเเปร button ที่เป็น useState โดยมีค่าเริ่มต้นคือ ☰ หน้าที่ไปเเสดงค่า ใน Hamberger หรือ button เมื่อ Resposive มีขนาดเล็กกว่า md
ฟังค์ชั่น handleCick คื่อฟังก์ชั่นเช็ค open เเละกำหนดค่าให้กับ button
return
ครอบ div ใหญ่สุดโดยมีขนาดกว้างเเละสูง เท่ากับ screen
nav bar กำหนดเป็น flex flex-row ความกว้างเท่ากับ screen เเละขนาดความสูงสุดเท่ากับ320px เเละมีเงาด้วยคำสั่งshadow-xl  ถ้ามีขนาดมากกว่า md 
    -h1 เเสดงว่าโลโก้ MySite เเละตกเเต่งให้สวยงามด้วย tailwind
    -div เก็บในลิงค์ในเเนวนอน Home , About, Services, Contact เเละตกเเต่งให้สวยงามด้วย tailwind หน้าจอขนาดเล็กกว่า md ให้ซ่อน
    -button ถ้ากำหนดว่าถ้าเป็น Responsive ถ้ามีขนาดใหญ่กว่า md button นี้จะ hidden เเต่ถ้า Resposive มีขนาดตำกว่า md ให้เเสดง button นี้เเละซ่อน div ที่เก็บลิงค์เเนวนอน เเล้วเเสดงลิงค์ในเเนวตั้งเเต่มันจะไม่เห็นเพราะมันเกินขนาด  nav เพราะเราตั้งdiv ในเเนวตั้งว่า overflow-hidden มันจะไม่แสดงส่วนที่เกิน nav
    -div เก็บลิงค์ต่างๆในเเนวตั้ง กำหนด animationไว้ว่า ถ้่า open เท่ากับ true ให้ div นี้ มีความขนาดสูงสุด max-h-96 เเละไม่โปรงใส แต่ถ้าเป็น false ให้ max-h-0 ความสูงเท่ากับ 0 เเละ มีความโปร่งใส
div จะเเสดง title เเละ children


