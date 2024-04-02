const linksUi= document.getElementById('ui');
const pass= document.getElementById('pass');
const button1= document.querySelector('#button1');
const inputSpan= document.getElementById('inputSpan');
function displayScreen() {
if (pass.value="TOCH24$") {
linksUi.style.display="block";
inputSpan.style.display="none";
} else {alert("Password Incorrect")}
}
button1.onclick= displayScreen;
