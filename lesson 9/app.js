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
/*
function timNghiem = (a, b, c) => {
    if(a == 0) return;
    
    
    else {
        let arrNghiem =[];
    }
}*/

// 1. Khai báo 1 Function với đầu vào là 3 số a,b,c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình 
    /*
function math(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      return []; // Nếu delta âm thì phương trình vô nghiệm và trả về một mảng rỗng
    } else if (delta === 0) {
      let x = -b / (2 * a);
      return [x]; // Nếu delta bằng 0 thì phương trình có nghiệm kép và trả về mảng chứa duy nhất một nghiệm
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [x1, x2]; // Nếu delta dương thì phương trình có hai nghiệm phân biệt và trả về mảng chứa hai nghiệm đó
    }
  }
  let result = math(1, -5, 6); 
    console.log(result); 
  */
 //2. Khai báo 1 function với đầu vào là 3 số a,b,c. kiểm tra xem a,b,c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. ngược lại,đầu ra là false.
/*
 function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isTriangle(3, 4, 5)); 
    console.log(isTriangle(1, 2, 3));
*/
//3. Khai báo 1 function với đầu vào là day, month, year. kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng, năm hợp lệ không.
/*
function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() + 1 === month &&
      date.getDate() === day
    );
  }

  console.log(isValidDate(29, 3, 2023)); 
console.log(isValidDate(31, 2, 2021));
*/