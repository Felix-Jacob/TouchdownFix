const linksUi= document.getElementById('ui');
const string2= document.getElementById('pass');
const button1= document.querySelector('#button1');
const inputSpan= document.getElementById('inputSpan');
const string1="TOCH24$"
function displayScreen() {
    console.log(string2.value)
if (string1===string2.value) {
linksUi.style.display="block";
inputSpan.style.display="none";
} else {alert("Password Incorrect")}
}
button1.onclick= displayScreen;
