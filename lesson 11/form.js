function SubmitForm() {
  const data = {
    name: "",
    middle: "",
    last: "",
    course: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    repassWord: "",
  };

  let $firstName = document.getElementById("firstname").value;
  let $middleName = document.getElementById("middlename").value;
  let $lastName = document.getElementById("lastname").value;

  let $male = document.getElementById("male").value;
  let $female = document.getElementById("female").value;
  let $other = document.getElementById("other").value;

  let $phone = document.getElementById("phone").value;

  let $passWord = document.getElementById("password").value;
  let $repassWord = document.getElementById("retype-password").value;
  let $submit = document.getElementById("submit").value;

  data.name = $firstName;
  data.middle = $middleName;
  data.last = $lastName;

  if ($firstName.trim() == "") {
    alert("Hãy nhập tên đầy đủ");
  } else if ($middleName.trim() == "") {
    alert("Hãy nhập tên đầy đủ");
  } else if ($lastName.trim() == "") {
    alert("Hãy nhập tên đầy đủ");
  }
}
