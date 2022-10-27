localStorage.setItem("accountNames", JSON.stringify(accountNames));
function login() {
    let a = prompt("Mời nhập tên đăng nhập");
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
    alert("Đăng xuất thành công");
    av.src= "avatar.png";
    c.innerHTML ="Mời đăng nhập";
}