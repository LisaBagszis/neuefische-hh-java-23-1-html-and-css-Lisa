

const students =
    [
        {name: "Jens", id: "1"},
        {name: "Lisa", id: "2"},
        {name: "Susanne", id: "3"},
    ];


function findStudentAndUpdateName(student) {
    if (student.id === "1") {
        return { name: "Mario", id: "1"};
    }
    return student
}

function replace(students: Student[],  name: string, id: string): Student[] {
    return students.map(findStudentAndUpdateName)
}

console.log(replace(students, "Michael", "4"))
console.log(students)

//funktions-name Parameter:(variabel-name : type,      variabel-name: type,variabel-name: type): RückgabeType            { Body }
function replaceArrow(students: Student[], name: string, id: string): Student[] {
    return students.map((student) => {
        if (student.id === id) {
            return {id: id, name: name}
        }
        return student
    })
}

console.log(replaceArrow(students, "Michael", "4"))
type Student = {id: string, name: string}



