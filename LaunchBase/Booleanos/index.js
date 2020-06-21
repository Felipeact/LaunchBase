const classA = [
    {
        name: 'Mayk',
        grade: 9.8,
    },
    {
        name: 'Diego',
        grade: 10,
    },
    {
        name: 'Fulano',
        grade: 2,
    },
    {
        name: 'Mais um student',
        grade: 10,
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 10,
    },
    {
        name: 'Robson',
        grade: 10,
    },
    {
        name: 'Siclano',
        grade: 2,
    },
    {
        name: 'Novo Aluno',
        grade: 5,
    },
]

//Function

function calculateAverage(students) {
    let sum = 0
  
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}, Congratulations`)
    } else {
        console.log(`${turma} average: ${average}, Is not good enough`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        students.flunked = true
    }
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`o Aluno ${student.name} esta flunked! `)
    }
}

function studentsFlunkeds(students) {
    
    for (student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}



sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunkeds(classA)
studentsFlunkeds(classB)