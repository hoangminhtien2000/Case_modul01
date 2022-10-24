function login() {
    let a = prompt("Mời nhập tài khoản");
    let b = prompt("Mời nhập mật khẩu");
    let c = document.getElementById("name");
    if (isAccountPasswordExist(a,b) === true) {
        alert(`Chào mừng ${accountNames[checkName(a)]}!!!`);
        c.innerHTML = `<h4>${accountNames[checkName(a)]}</h4`;
    } else alert("Đăng nhập thất bại");
}

function logout() {
    let av = document.getElementById("avatar");
    let c = document.getElementById("name");
    alert("Bạn vừa đăng xuất");
    av.src= "avatar.png";
    c.innerHTML ="Mời đăng nhập";
}