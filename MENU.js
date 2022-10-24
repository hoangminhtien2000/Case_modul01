let names = [
    ["https://wallpaperaccess.com/full/1320703.jpg", "Coffe", 30000],
    ["https://wallpaperaccess.com/full/82635.jpg", "Cream", 25000]
];
let divShow = document.getElementById("show");
function show() {
    console.log(names)
    let str = `
                <tr>
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Giá</th>
               </tr>
                <tr><td colspan="5"><hr></td></tr>`;
    for (let i = 0; i < names.length; i++) {
        str += `<tr>
                        <td><img src="${names[i][0]}" width="100" height="50"></td>
                        <td>${names[i][1]}</td>
                        <td>${names[i][2]}</td>
                        <td><button onclick="edit(${i})">Edit</button></td>
                        <td><button onclick="xoa(${i})">Delete</button></td>
                    </tr>
                    <tr><td colspan="5"><hr></td></tr>`;
    }
    divShow.innerHTML = str;
}

function clear(){
    let img = document.getElementById("inputImg").value='';
    let name = document.getElementById("inputName").value='';
    let price = document.getElementById("inputPrice").value='';
}

function edit(index) {
    let img = document.getElementById("inputImg").value;
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;
    names.splice(index, 1, [img, name, price]);
    show();
    clear();
}

function add() {
    let img = document.getElementById("inputImg").value;
    let name = document.getElementById("inputName").value;
    let price = document.getElementById("inputPrice").value;
    names.push([img, name, price]);
    show();
    clear();

}

function xoa(index) {
    names.splice(index, 1);
    show();
}