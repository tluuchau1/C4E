// array

// cách khai báo:
// let names = [
//     "long do",
//     "ngoc trinh",
//     "chi pu",
//     "dam vinh hung",
//     "chi pu",   
//     "ngoc trinh",
//     "ngoc trinh"
// ];
// console.log(names);

// let numbers = [1, 100,  40, 3, 20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;

// let features = [isRich , isHandsome , hasGirlfriend];

// isRich = true;

// console.log(features);                  

//c1 : for ... let i = 0 ...
//  for (let i = 0; i < names.length; i++)
//  let name = names[i];
//  if (name == "ngoc trinh" || name == "chi pu") {
//     console.log(stt + ". "+ name);
//  }     

// const numbers = [1, 7, 8, -3, 6, 10, 9];
// // in ra một số chẵn trong number
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (number % 2 == 0) console.log(number);   
// }
//tính tổng phần tử 
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     sum += number;
//     //sum = sum + number
// }
// console.log(sum);  
// // tìm số nhỏ nhất 
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (min > number) min = number;
// } 
// console.log(min);

// //thêm 3 số vào đầu mảng 
// numbers.unshift(100, 1000,-4);
// console.log(numbers);
// // thêm 3 số vào cuối bảng 
// numbers.push(-9, 10, 50);
// console.log(numbers);

// //xóa 1 phần tử đầu tiên trong mảng 
// let deletedFirstNumber = numbers.shift();
// console.log("giá trị phần tử đầu tiên bị xóa:" + deletedFirstNumber);

// //xóa 1 phần tử cuối mảng 

// let deletedFirstNumber = numbers.pop();
// console.log("giá trị phần tử cuối bị xóa: "+ deletedFirstNumber);

// let n = Number(prompt("nhập n")) {
//     if (n <= 0) {
//         alert("N nhập không đúng");
//     }
// } else {
//     let arr {}

// }
// tính tích của các phần tử trong mảng đó 
// function nhaCute() { 
//     var space = '';
//     for(var nhaHulk of arguments) {
//         space += `${nhaHulk} -`
//     }
//     console.log(space);
// }
// nhaCute('log-1' , 'log-2', 'log-3');

// var xacNhan = confirm('message');

// console.log(xacNhan);

// function cong(a, b) {
//     return a.toString() + b.toString()
// }
// var ketQua = cong(5 , 5);

// console.log(ketQua);

/*Bài 1: Khai báo 1 mảng gồm các số bất kỳ
- tính tích của các phần tử trong mảng đó
- tìm số nhỏ nhất mà chia hết cho 2 trong mảng
- tìm số lớn nhất mà chia hết cho 3 trong mảng
- tính giá trị trung bình của mảng
- Lọc ra các số nguyên tố trong mảng
- Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
- Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không
- Nhập vào số n cho đến khi n là 1 số trong mảng s
- sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
*/
/*
const arr = [1, 9, 10, 12, 18, 5, 3, 4, 20, 15]
//tính tích của các phần tử trong mảng đó

let product = 1;

for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}
console.log(product);

//tìm số nhỏ nhất mà chia hết cho 2 trong mảng

let minNum = Infinity;  //Giá trị này sẽ đảm bảo rằng giá trị nhỏ nhất tìm được trong quá trình duyệt mảng

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] < minNum) {
    minNum = arr[i];
  }
}

console.log(minNum);

//tìm số lớn nhất mà chia hết cho 3 trong mảng

let maxNumber = -Infinity; // sử dụng biến này để lưu trữ một số lớn nhất 

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0 && arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

console.log(maxNumber);
//tính giá trị trung bình của mảng

const sum = arr.reduce((acc, curr) => acc + curr); //phép tính được thực hiện là cộng các phần tử trong mảng lại với nhau.
const avg = sum / arr.length;

console.log(avg);

//Lọc ra các số nguyên tố trong mảng

const primes = [];

for (let i = 0; i < arr.length; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(arr[i]); j++) { //Phương thức này trả về giá trị căn bậc hai của đối số được truyền vào.
    if (arr[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (arr[i] > 1 && isPrime) {
    primes.push(arr[i]); // Thêm một hoặc nhiều phần tử vào cuối mảng, và trả về độ dài mới của mảng.
  }
}

console.log(primes); 
//Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không

if (arr.some(num => num < 10)) {
    console.log('Mảng có số nhỏ hơn 10');
  } else {
    console.log('Mảng không có số nhỏ hơn 10');
  }
//Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không

const result = arr.every(item => item > 20); // kiểm tra tất cả trong mảng có đủ điều kiện để pass không

console.log(result);

//Nhập vào số n cho đến khi n là 1 số trong mảng s

let n;

do {
  n = prompt('Nhập số: ');

  if (arr.includes(Number(n))) {  // kiểm tra xem n đã có trong mảng hay chưa
    console.log(`${n} có trong mảng`);
    break; // dừng vòng lặp 
  } else {
    console.log(`${n} không có trong mảng`);
  }
} while (true) 

//sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
*/
/*
Bài 2: Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
- Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
- Tìm những chuỗi trong mảng có chứa giá trị text.
- Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
- Tạo ra 1 chuỗi là sự kết hợp của phần tử trong s. Mỗi phần tử cách nhau bởi dấu '-'.
*/
/*
let arr = ['cmt8', 'D5', 'phú nhuận', 'Bạch đằng'];
//Nhập vào 1 chuỗi text.
let text = prompt('Nhập vào một chuỗi text: ');
console.log('Chuỗi vừa nhập là: ' + text);
//Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.

let shortest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
        shortest = arr[i];
        break;
    }
}

console.log("Chuỗi đầu tiên có độ dài nhỏ nhất trong mảng: " + shortest);
//Tìm những chuỗi trong mảng có chứa giá trị text.

let Strings = arr.filter(str => str.includes(text)); // lọc phần tử và tạo mới và kiểm tra đã có chưa
console.log("Các chuỗi trong mảng có chứa '" + text + "': " + Strings); 

//Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

let newS = arr.map(function(newarr) { // tạo một mảng mới từ đã có
  return newarr.slice(0, 3); // trích xuất một phần của mảng 
});
console.log(newS);

//Tạo ra 1 chuỗi là sự kết hợp của phần tử trong s. Mỗi phần tử cách nhau bởi dấu '-'.

let s = ['long', 'thang', 'kiet'];

let combinedArray = arr.concat(s);
let combinedStrings = combinedArray.join(' - ');

console.log(combinedStrings);
*/
/*
  Bài 3: Nhập vào 2 dãy d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ','.
- Kiểm tra xem tất cả các giá trị số d1 có nằm trong d2 không.
- Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
- Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
- Giả sử d1 , d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Soft).
*/

let d1 = [1, 2, 3, 11, 5, 6];
let d2 = ['berroca', 'vitamin B12', 'kẽm', 'Sắt'];
//Kiểm tra xem tất cả các giá trị số d1 có nằm trong d2 không.

for(let i=0; i<d1.length; i++){
  if(typeof d1[i] == "number" && !d2.includes(d1[i])){
      console.log("Không, không tất cả các giá trị số trong d1 đều nằm trong d2");
      break;
  }
  if(i == d1.length-1){
      console.log("Có, tất cả các giá trị số trong d1 đều nằm trong d2");
  }
}
//Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.

let sum = d1.reduce((a, b) => a + b, 0); // Tính tổng của mảng d1

let result = d2.some(item => sum % item === 0); // Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không

console.log(result);

//Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.

let d3 = [];

//Lặp qua các phần tử trong d1
for (let i = 0; i < d1.length; i++) {
  
  if (d1[i] % 2 === 0) {
    d3.push(d1[i]);
  }
}

for (let i = 0; i < d2.length; i++) {
  //Nếu phần tử hiện tại của d2 là một chuỗi con số chia hết cho 2 (vd: "vitamin B12")
  //thì cắt bỏ phần chuỗi trước dấu cách và lấy phần số sau đó kiểm tra nếu số đó chia hết cho 2 thì thêm nó vào d3
  let num = parseInt(d2[i].split(' ')[1]);
  if (!isNaN(num) && num % 2 === 0) {
    d3.push(num);
  }
}

console.log(d3); 

//Giả sử d1 , d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Soft).
/*
function mergeSortedList(d1, d2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < d1.length && j < d2.length) {
        if (d1[i] <= d2[j]) {
            result.push(d1[i]);
            i++;
        } else {
            result.push(d2[j]);
            j++;
        }
    }

    while (i < d1.length) {
        result.push(d1[i]);
        i++;
    }

    while (j < d2.length) {
        result.push(d2[j]);
        j++;
    }

    return result;
}

console.log(mergeSortedList([1, 2, 3, 11, 5, 6], ['berroca', 'vitamin B12', 'kẽm', 'Sắt']));
*/