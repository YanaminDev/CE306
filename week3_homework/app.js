function testVar(){
    var v = 10
    if(true){
        var v = 20; // ตัวเเปร x ถูกประกาศใหม่ใน block นี้ เเต่จะไปทับซ้อนกับตัวเเปร x ที่ประกาก่อนหน้านี้
        console.log(v); //20
    }
    console.log(v); // 20 ถูกประกาศใน block เเละค่าใหม่ถูกนำไปใช้ทั่วฟังก์ชั่น
}

function testLet(){
    let l = 10;
    if(true){
        let l = 20;  // ตัวเเปรถูกประกาศใน block เเละมีผลเฉพาะใน block เท่านั้น
        console.log(l);
    }
    console.log(l) // อblock ภายนอกยังคงเป็น 10 เนื่องจาก ใน block if ไม่มีผลนอก block
}

function testConst(){
    const c = 10;
    if(true){
        const c = 20; // ตัวเเปร c ถูกประกาศใน block นี้ และมีผลเฉพาะ block if  นี้เท่านั้น
        console.log(c);

    }
    console.log(c);
}

testVar();
console.log();
testLet();
console.log()
testConst();

var v =10
v=20
console.log(v)
console.log()

let l = 10;
l = 10;
console.log(l)

const c = 10
// c = 20
console.log(c)




let username = 'CE385'
/* นี้คือคอมเมนท์เเบบหลายบรรทัด
จุ้บๆ*/



// นี้คือคอมเมนเเบบบรรทัดเดียว
let password = '123456'


let messsage = 'Hello, World' // string
let score = 95; //Number
let isPassed = true //Boolean
let emptyValue = null //Null
let notDefined ; //Undefined
let person = { name : 'Alice' , age : 25} // Object
let number = [1,2,3,4] // Arrey

console.log(messsage)
console.log(score)
console.log(isPassed)
console.log(emptyValue)
console.log(notDefined)
console.log(person)
console.log(number)

console.log(typeof messsage) //string
console.log(typeof score) // Number




//Arithmetic Operators(ตัวดำเนินการทางคณิตศาสตณ์)

// การย้ายบรรทัด alt + ลูกศรขึ้น ลง มันจะเลื่อนลงทั้งบรรทัด



let a = 10 ; b = 5;

console.log("Addittion (a + b): ",a+b) // การบวก
console.log("Subtraction (a - b):" ,a-b)//การลบ
console.log("Multiplication(a*b)", a*b)//การคูณ
console.log('Division (a/b): ',a /b)//การหาร
console.log('Modulus (a%b):' ,a%b)//การหารเอาเศษ
console.log('Exponentiation (a**b)', a**b)//การยกกำลัง


// Assignment Operators (ตัวดำเนินการกำหนดค่า)
let x = 10;
x += 5
console.log('x + 5 : ',x)

x-= 3 ;
console.log('x -= 3 ', x)

x*= 2 
console.log('x *= 2: ', x)

x/=4
console.log('x/4 :' ,x)

x%=3
console.log('x%=3', x)


//ตัวดำเนินการเปรียบเทียบ

//=== เช็คว่าชนิดเดียวกันไหม เหมือนกันไหม ค่าเท่ากันไหม

let age = 20
let isAdult = (age >= 18) && (age < 65) //AND
let isChild = (age < 18) || (age > 65) // OR
let notAdult = !isAdult //NOT
console.log('isAdult: ' , isAdult);
console.log('isChild: ' , isChild);
console.log('notAdult: ',notAdult)

//Ternary Operator
let score1 = 75;
let grade = (score1 >= 80) ? 'A' : 'B' ;
//= (เงื่อนไข) ? true : false ;
console.log('Grade : ',grade)


// if (เงื่อนไข){
//     //คำสั่งที่ต้องการให้ทำ ถ้าเง่ื่อนไขจริง
// }

// if (เงื่อนไข){
//     //คำสั่งที่ต้องการให้ทำ ถ้าเง่ื่อนไขจริง
// } else{
//     ถ้าเงื่อนไขเป็นเท็จ
// }

let score2 = 75
if(score2 >= 80){
    console.log('เกรด A')
}
else if (score2 >= 70) {
    console.log('เกรด B')

}
else if(score2 >= 60){
    console.log('เกรด C')

}
else{
    console.log('ตก')
}

// const daynumber = 1 ;
// switch (daynumber){
//     case 0 :
        
// }

//while loop:
let j = 1;
while (j<= 5){
    console.log(j);
    j++
}

//do..while
let k = 1;
do{
    console.log(k)
    k++

}while(k<=3)

function myFunction(a,b){

    let result = a*b
    console.log(result)
}

myFunction(10,20)

let fruits = ['Apple' , 'Banana' , 'Cherry' , 'Mango']


fruits.push('Boomb')


let fruits1 = ['Apple' , 'Banana' , 'Cherry' , 'Mango']
for(let i = 0 ; i < fruits1.length;i++){
    console.log(`Fruit ${i+1}: ${fruits1[i]}`)
}

