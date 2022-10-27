let usernames  = JSON.parse(localStorage.getItem("usernames"));
let passwords  = JSON.parse(localStorage.getItem("passwords"));
let accountNames  = JSON.parse(localStorage.getItem("accountNames"));
if (usernames === null||passwords === null||accountNames === null) {
    usernames = [];
    passwords = [];
    accountNames = [];
}

//-----------------------------------Kiểm tra tên đăng nhập đã tồn tại chưa--------------------------------------------
function isAccountExist(username) {
    localStorage.setItem("usernames", JSON.stringify(usernames));
    for (let i in usernames) {
        if (usernames[i] === username) {
            return true;
        }
    }
    return false;
}

//----------------------------Kiểm tra tài khoản và mật khẩu đã tồn tại chưa-------------------------------------------
function isAccountPasswordExist(username, password) {
     localStorage.setItem("usernames", JSON.stringify(usernames));
     localStorage.setItem("passwords", JSON.stringify(passwords));
    for (let i in usernames) {
        if (usernames[i] === username && passwords[i] === password) {
            return true;
        }
    }
    return false;
}

//------------------------------------------------Tìm tên tài khoản----------------------------------------------------
function checkName(username) {
     localStorage.setItem("usernames", JSON.stringify(usernames));
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
        localStorage.setItem("usernames", JSON.stringify(usernames));
        localStorage.setItem("passwords", JSON.stringify(passwords));
        localStorage.setItem("accountNames", JSON.stringify(accountNames));
    }
}