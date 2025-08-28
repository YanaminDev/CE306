let students=[
    {
        name: 'Alice',
        score : 85    
    },
    {
        name: 'Bob'
        ,score:  55
    },
    {
        name:'Charlie',
        score:65 ,
    },
    {
        name: 'Violet'
        ,score:60
    },
    {
        name:'David'
        ,score:30

    },
    {
        name:'John'
        ,score: 15
    }
]

const minimumScore = 65

function filterPassedStudents(minimumScore){
    students.forEach((students) => {
        if (students.score >= minimumScore){
            console.log(`Student ${students.name} passed with score ${students.score} `)
        }
    })
}

filterPassedStudents(minimumScore)

//