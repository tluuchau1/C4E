let text = document.getElementById('ketQua');
let input = document.getElementById('nhap');
function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
        alert("Số truyền vào phải nằm trong khoảng từ 1 - 10");
    } else {
        let triangle = "";
        for (let i = 1; i <= n; i++) {
            if (i === n) {
                triangle += "*".repeat(i)
            } else {
                triangle += "*".repeat(i) + "\n"
            }
        }
        text.innerText = triangle;
    }
}
input.oninput = (event) => {
    console.log(event.target.value);
    numberOneTriangle(event.target.value)
}
numberOneTriangle(input);