let list = new DanhsachSV()

function main() {
    let sv1 = new Student("C01", "Thắng", "thang@gmail", 123, "Hà Nội", "Nam")
    let sv2 = new Student("S02", "Uyên", "uyen@gmail", 123, "Hà Nội", "Nữ")

    list.addStudent(sv1);
    list.addStudent(sv2);
    // list.remove(1)
    let listStyleInStudent = list.findAll();
    // console.log(sv1);
    for (let i = 0; i < listStyleInStudent.length; i++) {
        console.log(listStyleInStudent[i])
     }
}

main()

function showAll() {
    let listStudentInStyle = list.findAll();
    let stringHTML = ``;
    for (let i = 0; i < listStudentInStyle.length; i++) {
        stringHTML += `
        <tr>
            <td>${listStudentInStyle[i].MaSv}</td>
            <td>${listStudentInStyle[i].name}</td>
            <td>${listStudentInStyle[i].email}</td>
            <td>${listStudentInStyle[i].phoneNumber}</td>
            <td>${listStudentInStyle[i].address}.</td>
            <td>${listStudentInStyle[i].gender}.</td>
            <td><button onclick="update(${i})">Sửa</button></td>
            <td><button onclick="removeStudent(${i})">Xóa</button></td>

        </tr>
        `

    }
    document.getElementById("list-students").innerHTML = stringHTML;
}

showAll();


function save() {
    let MaSv = document.getElementById("MaSv").value;
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let gender = ``;
    // let newStudent = new DanhsachSV(MaSv, name, email, phone, address, gender);
    // list.addStudent(newStudent)
    // showAll()

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
        document.getElementById('gender-error').innerHTML = '';
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
        document.getElementById('gender-error').innerHTML = '';
    } else {
        document.getElementById('gender-error').innerHTML = 'Vui lòng chọn giới tính';
    }

    if (MaSv === "") {
        document.getElementById('Masv-error').innerHTML = 'Vui lòng nhập Mã SV '
    } else {
        document.getElementById('Masv-error').innerHTML = '';
    }
   if (name === "") {
        document.getElementById('name-error').innerHTML = 'Vui lòng nhập Họ tên';
    } else {
        document.getElementById('name-error').innerHTML = '';
    }
    if (email === "") {
        document.getElementById('email-error').innerHTML = 'Vui lòng nhập Email';
    } else {
        document.getElementById('email-error').innerHTML = '';
    }
    if (phone === "") {
        document.getElementById('phone-error').innerHTML = 'Vui lòng nhập SĐT';
    } else {
        document.getElementById('phone-error').innerHTML = '';
    }
    if (address === "") {
        document.getElementById('address-error').innerHTML = 'Vui lòng nhập địa chỉ';
    } else {
        document.getElementById('address-error').innerHTML = '';
    }


        if (MaSv !== '' && name !== '' && email !== '' && phone !== '' && address !== '' && gender !== '') {
            let student = new Student(MaSv, name, email, phone, address, gender);
            if(index === '') {
                list.addStudent(student);
            }else {
                // update giá trị
            }
            showAll()
        }


    }
    function removeStudent(index){
        let checkRemove = confirm(" Bạn có muốn xóa dữ liệu này không?");
        if(checkRemove){
            list.remove(index);
            showAll()
        }
    }

function update(index){
    let studentEdit = list.findAll()[index];
    document.getElementById("MaSv").value = studentEdit.MaSv;
    document.getElementById("fullname").value = studentEdit.name;
    document.getElementById("email").value = studentEdit.email;
    document.getElementById("phone").value = studentEdit.phoneNumber;
    document.getElementById("address").value = studentEdit.address;
    document.getElementById("gender").value = studentEdit.gender;
}

