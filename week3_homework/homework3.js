


let student1 = [
{
    name : 'Jame Born',
    grade : 'A'

},
{
    name : 'Harry Potter' ,
    grade: 'C'
},
{
    name : 'Lily Brown' ,
    grade: 'B'
}

]

student1.forEach((student1 ,index) => {
    console.log(`student [${index}] : ${student1.name} , Grade : ${student1.grade}`)

});

function showStudentCount(){

    console.log('total student : ',student1.length) 
}

showStudentCount()
    

//

