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
    itembox.classList.add('item')

    var input = document.createElement('input');
    input.classList.add('kq');
    input.value = nhap;
    input.disabled = true;


    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = 'Sửa';
    edit.addEventListener('click', () => sua(nhap, input));

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = 'Xoá';
    remove.addEventListener('click', () => xoa(this));

    container.appendChild(itembox);
    itembox.appendChild(input);
    itembox.appendChild(edit);
    itembox.appendChild(remove);
}

function sua(nhap, input) {
    input.disabled = false;
}

// Xóa lời nhắc
function xoa(index) {
    child = index.parentNode;
    i = index;
    alert(i);
}