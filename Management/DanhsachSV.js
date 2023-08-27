class DanhsachSV {
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
    remove(index){
        this.listStudent.splice(index,1);

    }
    edit(index, newStudent){
        this.listStudent[index] = newStudent;
    }


}