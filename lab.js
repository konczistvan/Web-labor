function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(5));

let count = 0;
function incrementCounter() {
  count++;
  document.getElementById("counter").innerText = count;
}

function askName() {
  let name = prompt("Mi a neved?");
  document.getElementById("name").innerText = "Üdvözöllek, " + name + "!";
}

function startCountdown() {
  let timeLeft = 10;
  let timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerText = "Idő lejárt!";
    } else {
      document.getElementById("countdown").innerText = timeLeft;
    }
    timeLeft--;
  }, 1000);
}

let fruits = ["Alma", "Banán", "Narancs"];
fruits.forEach(function (fruit) {
  document.getElementById("fruitList").innerHTML += "<li>" + fruit + "</li>";
});

function multiplyArray(arr, multiplier) {
  return arr.map((num) => num * multiplier);
}
let numbers = [1, 2, 3, 4];
console.log(multiplyArray(numbers, 2));

let person = { name: "John", age: 30, city: "Budapest" };
for (let key in person) {
  document.getElementById("personInfo").innerHTML +=
    "<li>" + key + ": " + person[key] + "</li>";
}

function changeBg() {
  document.body.style.backgroundColor = "lightcoral";
}

window.onload = function () {
  setTimeout(function () {
    alert("Üdvözöllek az oldalon!");
  }, 5000);
};
