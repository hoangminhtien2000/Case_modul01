function login() {
    let a = prompt("Mời nhập tài khoản");
    let b = prompt("Mời nhập mật khẩu");
    let c = document.getElementById("name");
    if (isAccountPasswordExist(a,b) === true) {
        alert(`Chào mừng ${accountNames[checkName(a)]}!!!`);
        c.innerHTML = `<p style="margin-top: 0"><b>${accountNames[checkName(a)]}</b</p>`;
    } else alert("Đăng nhập thất bại");
}

function logout() {
    let av = document.getElementById("avatar");
    let c = document.getElementById("name");
    alert("Bạn vừa đăng xuất");
    av.src= "avatar.png";
    c.innerHTML ="Mời đăng nhập";
}