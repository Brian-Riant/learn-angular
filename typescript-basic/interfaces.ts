interface student{
    id: number
    name: string
}

const printStudentsId = (student: student) =>{
    console.log(student.id);
    console.log(student.name);
}

let student = { id:1323, name:'Brian'}
printStudentsId(student)