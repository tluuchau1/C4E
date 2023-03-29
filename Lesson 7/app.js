// let a = "hello";
// let b =  10;

// nhập dữ liệu từ bàn phím và gán giá trị vừa nhập vào trong 1 biến 

// let input = prompt("Hãy nhập vào đây để gán giá trị cho biến 'input': "); // dữ liệu có kiểu string

// console.log('bạn vừa nhập vào' + input);

// let x = Number(prompt("nhập số x"));
// let y = Number(prompt("nhập số y"));

// let z = x + y;
// console.log(z);

// console.log(input);

// let name =" hoang long ";
// {
//     let age = 28; // age chỉ tồn tại trong biến 
//     let name =" someone else";
//     {
//         let address = "thai binh";
//         // address chỉ tồn tại ở trong đây 
//     }

//     console.log(age);
// }
 
// let age = prompt ("nhập vào tuổi của bạn ");

// nếu age nhỏ hơn 18 thì => "không cho vào "
// nếu age lớn hơn hoặc bằng 18 => " vào thoải mái "

// if (age < 18) {
//     console.log("không cho vào");
// } else {
//     consolekjuy.log("vào thoải mái");
// }

// nhập vào phân loại của 1 thằng học sinh: 1, 2, 3
// nếu phân loại là 1 => 'Thằng này xứng đáng có 10 người yêu'
// nếu phân loại là 2 => '9,5 điểm'
// nếu phân loại là 3 => 'cần có cố gắng hơn'

// let rank = prompt('nhập vào phân loại');
// if (rank == 1) {
//     console.log('Thằng này xứng đáng có 10 người yêu')
// } else if(rank == 2) {
//     console.log('9,5 điểm');
// } else if(rank == 3) {
//     console.log('cần cố gắng hơn');
// } else {
//     console.log('nhập đúng rank của bạn');
// }


// phần diều kiện
// let text = prompt('nhập vào 1 chuỗi');

// if(text.length < 8) {
//     console.log('chuỗi ngắn quá');
// } else {
//     console.log('chuỗi này ok');
// }

// in ra dòng "I love you" 500 lần, mỗi dòng có đánh số thứ tự 

// for(let a = 1; a <= 500; a++) {
//     console.log(a + ".I love you");
// }

// for(let a = 1; a <= 50; a++){
//     console.log(a);
// }
// let num = 10;
// while (num >= 6) {
//     console.log(num);
//     num = math.floor(math.random() * 10);
// }

// let index = 1;
// while (index <= 200) {
//     console.log(index);
//     index++;
// }

// let s = prompt ("chuỗi S");
// let l = prompt ('sô 1');

// while (s.length < 1) {
//     s += 'a';
// }
// console.log(s);

// let x = prompt('nhập số X');
// let y = prompt('nhập số y');

// if(
//     x >= 0
//     && x < y 
//     && y <= 100
// ) {
//     while (x < y) {
//         x++;
//         y--;
//     }
// }
// console.log(x , y);
// {

// }
// bài 1 
// for(let a = 1; a <= 500; a++){
//     console.log(a);
// }


// nhập vào sô n (2<=n<=10) in ra bản cửu chương của sô n

// let n = Number(prompt("nhập số n"))

// for (let i = 1; i <= 10; i++)
// {
//     console.log();
// }


//BTVN
//bài 1 Dùng vòng lặp for, while để xuất ra các số chẵn từ 0 đến 100
/* // for
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
} 
*/
// while
/*
let i = 0;
while (i <= 100){
    console.log(i);
    i += 2;
}
*/
//bài 2 Nhập vào 2 tham số a, b, in ra thông báo so sánh giữa 2 số
/*
let a = prompt('Nhập số a');
let b = prompt('nhập số b');

if (a == b)  {
    console.log("a và b bằng nhau");
} else {
    console.log("a và b không bằng nhau");
}
*/
//Bài 3 Viết hàm nhập vào một số nguyên dương, in ra thông báo số đó là chẵn hay lẽ
/*
let a = Number(prompt('nhập a là số dương'))

if (a <= 0 != isNaN(a)) {
    console.log('a phải là số nguyên dương ')
} else if (a % 2 == 0) {
    console.log('a là số chẵn ')
} else {
    console.log('a là số lẻ ')
}
*/
//Bài 4: Tính tổng các số nguyên dương từ 0 đến 100, xuất ra màn hình kết quả
/*
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log('tổng từ 0 đến 100 là: ' + sum);
*/
//Bài 5: Thực hiện xử lý, nhập vào một ngày, hiển thị thông báo tên thứ trong tuần
/*
const inputDate = prompt('Nhập Ngày: ');
const date = new Date(inputDate);
const dayofweek = date.getDay();
const dayNames = ['Chủ nhật', 'Thứ Hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
alert(`ngày ${inputDate} là ${dayNames[dayofweek]}`)
*/
//Bài 6: Nhập vào một giá trị bất kì, kiểm tra giá trị là số nguyên, số thập phân hay là chữ
/*
let value = prompt('Nhập vào một giá trị bất kì: ')
if (Number.isInteger(Number(value))) {
    console.log(`${value} là số nguyên`);
} else if (Number.isNaN(Number(value))) {
    console.log(`${value} là chữ`);
} else {
    console.log(`${value} là số thập phân`);
}
*/
//Bài 7: Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
/*
let n = parseInt(prompt("Nhập vào độ dài cạnh của hinh vuông: "));
for (let i = 0 ; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
        row += "* ";
    }
    console.log(row);
}
*/
//Bài 8: Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
/*
let m = prompt('Nhập chiều rộng của hình chữ nhật (m >= 2): ');
let n = prompt('Nhập chiều cao của hình chữ nhật (n >= 2): ');

// chuyển kiểu dữ liệu của biến m và n thành số

m = parseInt(m);
n = parseInt(n);

// kiểm tra tính hợp lệ của m và n

if(isNaN(m) || isNaN(n) || m < 2 || n < 2) {
    console.log('Vui lòng nhập lại giá trị hợp lệ')
} else {
    // Vẽ hình chữ nhật
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < m; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
*/
//Bài 9: Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
/*
let n = prompt("Nhập vào số n:");
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}
*/
/* Bài 10: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
Nếu BMI < 18.5 → in ra “Nhẹ cân”
Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
Nếu 23 <= BMI < 25 → in ra “Thừa cân”
Nếu BMI >= 25 → in ra “Béo phì”
*/
/*
let w = prompt('Nhập vào cân nặng của bạn (kg): ');
let h = prompt('nhập vào chiều cao của bạn (m): ');
let bmi = w / (h * h) // công thức tính BMI, ta chia cân nặng (w) của người đó cho bình phương chiều cao (h^2)

if(bmi < 18.5) {
    console.log('Nhẹ cân');
} else if (bmi >= 18.5 && bmi < 23) {
    console.log('Bình thường');
} else if (bmi >= 23 && bmi < 25) {
    console.log('Thừa cân');
}  else {
    console.log('Béo phí');
}
*/