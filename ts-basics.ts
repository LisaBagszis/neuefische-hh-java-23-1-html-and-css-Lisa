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

const students =
    [
        {name: "Jens", id: "1"},
        {name: "Lisa", id: "2"},
        {name: "Susanne", id: "3"},
    ];

const Id = "1";
function findStudentAndUpdateName(student) {
    if (Id == student.id) {
        return { name: "Mario", id: Id};
    }
    return student
}
const newStudents = students.map(findStudentAndUpdateName);
console.log(students);
console.log(newStudents);






