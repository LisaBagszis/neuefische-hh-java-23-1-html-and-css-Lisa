/*const valueA : string =  "Hello World"
const valueB : number = 13.05
const valueC : boolean = true

//System.out.println()
console.log(valueA)
console.log(valueB)


function add( a : number, b : number) : number {
    return a + b
}
console.log(add(4 , 5))*/

const students: {name: string, id: string}[] =
    [
        {name: "Jens", id: "1"},
        {name: "Lisa", id: "2"},
        {name: "Susanne", id: "3"}
    ]


const Id: string = "1"
function findStudentAndUpdateName(student: {name: string, id: string}) {
    if(Id == student.id) {
        return student.name = "Mario"
    }
}

const newStudents: {name: string, id: string}[] = students.filter(findStudentAndUpdateName)

console.log(newStudents)

function findStudentAndGiveNewStudent(student1: {name: string, id: string}) {
    if(Id == student1.id) {
        return student1.name = "Henry"
    }
}

const newStudent: {name: string, id: string}[] = students.filter(findStudentAndGiveNewStudent)
console.log(newStudent)



