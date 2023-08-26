class Student{
    listStudent;
    constructor() {
        this.listStudent = [];
    }
    addStudent(newStudent){
        this.listStudent.push(newStudent);
    }
    findAll(){
        return this.listStudent;
    }

}