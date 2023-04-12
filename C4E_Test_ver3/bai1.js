function soNguyen(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
        return true;
    }
}

function tinhTong() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);

    let sum = 0;

    for (let i = a; i <= b; i++) {

        if (soNguyen(i)) {
            sum += i;
        }
    }
    document.getElementById('ketQua').innerHTML = "tổng các số nguyên tố trong khoảng " + a + ' và ' + b + ' là: ' + sum; 
}