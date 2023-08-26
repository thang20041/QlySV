let list = new Student()

function main() {
    let sv1 = new DanhsachSV("C01", "Thắng", "thang@gmail", 123, "Hà Nội", "Nam")
    let sv2 = new DanhsachSV("S02", "Uyên", "uyen@gmail", 123, "Hà Nội", "Nữ")

    list.addStudent(sv1);
    list.addStudent(sv2);
    let listStyleInStudent = list.findAll();
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
            <td><button>Sửa</button></td>
            <td><button>Xóa</button></td>

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
    let newStudent = new Student(MaSv, name, email, phone, address, gender);
    list.addStudent(newStudent)
    showAll()

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
        document.getElementById('MaSv-error').innerHTML = '';
    }
    {
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
            let sv3 = new DanhsachSV(MaSv, name, email, phone, address, gender);
            list.addStudent(sv3);
            showAll()
        }

        }
    }



//Lưu dũ diệu vòa danh sách sinh viên

//

