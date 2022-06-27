


const send = document.querySelector("#send")

send.addEventListener("click", (e) => {

e.preventDefault()

const user = document.querySelector("#user")
const password = document.querySelector("#password")

alert(user.value)
console.log(user.value)
console.log(password.value)



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": user.value,
  "password": password.value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/person/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

})