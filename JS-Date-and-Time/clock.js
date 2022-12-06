let info = prompt ("İsim giriniz")
let userName = document.querySelector("#myName")
userName.innerHTML = `${info}`;

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("myClock").innerHTML = date.toLocaleTimeString() + " " + day;
}

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.getElementById("#myDate").innerHTML = day;



