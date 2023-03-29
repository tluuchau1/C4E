// const mySelf = {
//     firstName: "Hoang Long",
//     lastName: "Đỗ",
//     dod: "11/7/2001",
//     address: "Nha Trang",
//     phoneNumber: "0931234350"

// }
// console.log(mySelf.firstName);

// const key = 'firstName';
// console.log(mySelf[key]);
// object dùng for in 
// array dùng for of

// for(let key in mySelf) {
//     console.log("đặc điểm " + key + " có giá trị là: " + mySelf.[key])
// }

// khai báo function nhập và kiểm tra 1 số
// let a = 0;
// let b = 0;

// function inputNumber(label) {
//     let input = NaN;
//     do {
//         input = Number(prompt("Nhập vào số" + label + " : "));
//     } while (isNaN(input));
//     return input; // trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới 
// }
// //gọi function inputNumber
// a = inputNumber("a");
// b = inputNumber("b");
// let c = inputNumber("c")
// console.log(a + b);

// function testFunction(){
//     let name = " Long";
//     alert("Hello World" + name);
// }
// testFunction();

// function test(){
//     let a = 100;
//     let b = 10;
//     // closure (bao đóng)
//     function calculateAB() {
//         return a + b;
//     }
//     return calculateAB();
// }

// console.log(test());

/*
Call back 
- là 1 function được truyền vào function khác thông qua tham số
- thường dùng trong"
+ xử lý timer 
*/

// function doSomething() {
//     console.log("do something here");

// }
// function sayHello() {
//     console.log("Hello world");
// }

// function executeAfterSeconds(seconds, work) {
//     console.log("thực thi gì đó sau " + seconds + " giây");
//     setTimeout(work, seconds * 1000);
// }

// executeAfterSeconds(3, sayHello);
// executeAfterSeconds(5, doSomething);    

// khai báo Arrow function 

// const doAnything = () => {

// }

// const doNothing = (a, b, c, d) => {
//     return "hello";
// };

// const sum = (a, b, c) => a + b + c;

// const chinhDo = {
//     name: "Chinh do",
//     flirt: () => {
//         console.log(this);
//     },

//     run: function () {
//         console.log(this);
//     }
// }

function timNghiem = (a, b, c) => {
    if(a == 0) return;
    
    
    else {
        let arrNghiem =[];
    }
}