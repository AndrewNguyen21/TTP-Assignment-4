//Assignment 4

//q1
function button1() {
  let right = document.getElementById("argument");
  right.innerText = "I'm right!";
}

function button2() {
  let right = document.getElementById("argument");
  right.innerText = "No, I'm right!";
}

//q2
//script written in task2.html;

//q4
function formValidation() {
  let password = document.getElementById("password");

  if (password.value == "12345678") {
    document.getElementById("validation").innerText = "Form: Complete";
    event.preventDefault();
  } else {
    alert("Incorrect Password!");
  }
}
