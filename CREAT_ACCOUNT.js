let usernames = ["hoangminhtien", "a"];
let passwords = ["123", "456"];
let accountNames = ["Hoàng Minh Tiến", "TESTER"];

//-----------------------------------Kiểm tra tên đăng nhập đã tồn tại chưa--------------------------------------------
function isAccountExist(username) {
    for (let i in usernames) {
        if (usernames[i] === username) {
            return true;
        }
    }
    return false;
}

//----------------------------Kiểm tra tài khoản và mật khẩu đã tồn tại chưa-------------------------------------------
function isAccountPasswordExist(username, password) {
    for (let i in usernames) {
        if (usernames[i] === username && passwords[i] === password) {
            return true;
        }
    }
    return false;
}

//------------------------------------------------Tìm tên tài khoản----------------------------------------------------
function checkName(username) {
    for (let i in usernames) {
        if (usernames[i] === username) {
            return i;
        }
    }
    return false;
}

function createAccount() {
    let a = prompt("Mời nhập tên đăng nhập");
    let b = prompt("Mời nhập mật khẩu");
    let c = prompt("Mời nhập tên tài khoản");
    //Không cho phép tạo tài khoản trùng tên đăng nhập(User Name) với tài khoản đã được tạo.
    if (isAccountExist(a) === true) {
        alert("Tên đăng nhập đã tồn tại. Mời tạo tên đăng nhập khác.");
    } else {
        usernames.push(a);
        passwords.push(b);
        accountNames.push(c);
        alert("Tài khoản tạo thành công");
    }
}