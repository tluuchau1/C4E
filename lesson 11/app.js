// LocalStorage

// lưu dữ liệu vào localStorage

// localStorage.setItem('name', 'chinh do');
// localStorage.setItem('address', 'Thai Binh');
// localStorage.setItem('weight', 70);

// localStorage.setItem('name', 'someone');


// localStorage.setItem('favorites', ['a', 'b', 'c', 'd']);
// localStorage.setItem('pet', {type: 'cat', name: 'bob', age: 2});




// Lấy dữ liệu từ localStorage
// const value = localStorage.getItem('weight');

// console.log(value + 10);


// const favorites = localStorage.getItem('favorites');
// console.log(favorites);

// const pet = localStorage.getItem('pet');
// console.log(pet);
// const favorites = ['money', 'sleeping', 'girl'];
// const pet = {type: 'cat', name: 'bob', age: 2};

// const users = [
//     {id: 1, name: 'A', username: 'user_a', password: '12345678'},
//     {id: 2, name: 'B', username: 'user_b', password: '12345678'}   
// ];
// biến đổi object | array => string (json)
// const favoritesJSON = JSON.stringify(favorites);
// console.log(favoritesJSON);


// const petJSON = JSON.stringify(pet);
// console.log(petJSON);

//lưu lại users vào localstorage
// const userJSON = JSON.stringify(users); // biến đổi users => json
// localStorage.setItem('users', userJSON);
// console.log(userJSON);

// biến đổi string (json) => object | array


// const newPet = JSON.parse(petJSON);
// console.log(newPet);
//lấy user từ localStorage 
// const value =localStorage.getItem('users');
// const newUsers = JSON.parse(userJSON);
// console.log(newUsers);
const $seconds = document.getElementById('seconds');
const $startTimerBtn = document.getElementById('start-timer-btn');
const $pauseTimerBtn = document.getElementById('pause-timer-btn');
const $resTimerBtn = document.getElementById('res-timer-btn');

let timer = null;

$startTimerBtn.onclick = function (){
    timer = setInterval(() => {
        let value = $seconds.innerHTML;
        value = value - 1
        $seconds.innerHTML = value;
        if ( value == 0) {
            clearInterval(timer);
            return;
        }
    }, 1000);
};

$pauseTimerBtn.onclick = function() {
    clearInterval(timer);
}
$resTimerBtn.onclick = function() {
    clearInterval(timer);
    $seconds.innerHTML = 10;
 }

 //spread

 let nums1 = [1, 2, 3, 4];
 let nums2 = [8, 9, 10];

 let res1 = [...nums1, 10, 9, ...nums1];
 let res2 = [...nums1, ...nums2];
 console.log(res2)

 let part1 = {type: 'cat' , name: 'bob'};
 let part2 = {age: 20};

 let summary = {...part1, ...part2, name: 'Peter'};
 console.log(summary);
 
 //Destructuring

//  let type = summary.type;
//  let name = summary.name;

 let {type, name} = summary;
 console.log(type, name);

 let [a , b] = nums1;
 console.log(a , b);