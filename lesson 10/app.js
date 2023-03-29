// quy ước nhỏ: tất cả biên lưu phân tử html đều có dấu $

//Truy xuất phần tử thông qua id 

    // const $title = document.getElementById('big-title');

    // console.log($title);
//truy xuất phần tử thông qua class
// const $paragraphs = document.getElementsByClassName('red-paragraph');
// for (const $paragraph of $paragraphs) {
//     console.log($paragraph);
// }
//console.log($paragraph);
// truy xuất phần tử thông qua tên thẻ
// const $image = document.getElementsByTagName('img');
// console.log($image);

//document.querySelector(), document.querySelectorAll() => tìm hiểu khác nhau
// lấy ra nội dung của phần tử 
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// $title.innerHTML = 'Nội dụng mới';

// getAttribute lấy ra giá trị 
// setAttribute thay đổi / thêm 
// removeAttribute xóa thuộc tính

// lấy ra thuộc tính của 1 phần tử 
// let titleAttributeValue = $title.getAttribute('data-hello');
// console.log(titleAttributeValue);

// thêm mới / thay đổi thuộc tính của 1 phần tử 
// $title.setAttribute('data-goodbye', 'this is goodbye');
// $title.setAttribute('data-hello', 'this is hello');

//xóa thuộc tính của 1 phần tử 
// $title.removeAttribute('data-goodbye');
// thay đổi định dạng của phần tử 
// $title.style.color = 'red';
// $title.style.backgroundColor = 'black';
// $title.style.display = 'flex';
// $title.setAttribute = ('style', 'color: red; background-color: blue');

//Thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = 'This is link to somewhere';
// $link.setAttribute('href', 'http://google.com');
//append() thêm vào cuối

//prepend() thêm vào đầu
// document.body.prepend($link);
// after() thêm vào sau
// before() thêm vào trước 

// $title.append($link); // thêm link vào trong $title

//xóa phần tử trên trang web
// $title remove();
// listener sau ghi đè listener trước
// $title.onclick = handleClickTitle;
// $title.onclick = handleClickTitle2;

// $title.addEventListener('click', handleClickTitle);
// $title.addEventListener('click', handleClickTitle2);

// function handleClickTitle() {
//     console.log('hello')
// }
// function handleClickTitle2() {
//     console.log('goodbye')
// }

function isEmailValid(email)