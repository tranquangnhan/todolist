var submit = document.querySelector('.submit');
// var kq = document.getElementsByClassName('item');
var container = document.querySelector('.container');
submit.addEventListener('click', addarr);
var body = document.querySelector('body');

var arr = new Array();

function addarr() {
    var nhap = document.getElementById('nhap').value;
    var xuat = document.getElementsByClassName('kq');
    var itembox = document.createElement('div');
    itembox.classList.add('item');
    document.getElementById('nhap').value = " "; //xét input sau khi nhập bằng rỗng

    var input = document.createElement('input');
    input.classList.add('kq');
    input.value = nhap;
    input.disabled = true;
    // tạo element mới (input);



    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = 'Sửa';
    edit.addEventListener('click', () => sua(nhap, input));
    // tạo element mới (button); 


    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = 'Xoá';
    remove.addEventListener('click', () => xoa(itembox));
    // tạo element mới (button); 

    //create checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener("click", () => oncheck(checkbox));
    //create checkbox

    container.appendChild(itembox);
    itembox.appendChild(input);
    itembox.appendChild(edit);
    itembox.appendChild(remove);
    //appenChild checkbox
    itembox.appendChild(checkbox);
}


function sua(nhap, input) {
    input.disabled = false;
}

function xoa(itembox) {
    var ind = itembox.parentNode.removeChild(itembox);
}

//function checkbox
var term = 0;

function oncheck(checkbox) {
    if (checkbox.checked == true) {
        term++;
    }
    switch (term) {
        case 1:
            const audio1 = new Audio('sound/happy.mp3');
            audio1.play();
            xoa(itembox);
            break;
        case 2:
            const audio2 = new Audio('sound/happy2.mp3');
            audio2.play();
            break;
        default:
            break;
    }
}