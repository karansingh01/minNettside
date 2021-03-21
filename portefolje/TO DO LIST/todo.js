const inpHusk = document.querySelector("#inpHusk"); // Global variable that refers to element in HTML
const btnLeggTil = document.querySelector("#btnLeggTil"); // Global variable that refers to element in HTML
const antall_gjort = document.getElementById("antall_gjort") // Global variable that refers to element in HTML

let tasks = []


btnLeggTil.onclick = addTask;

function addTask() {
  let li = document.createElement("li");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  li.appendChild(check);
  check.addEventListener("click", checked_box)
  let t = document.createTextNode(inpHusk.value);
  li.appendChild(t);
  info.insertBefore(li, info.childNodes[0]);
  tasks.push(inpHusk.value + ": " + new Date()); 
  antall_gjort.innerHTML = `gjort  av ${tasks.length} `;
}

console.log(tasks);

function checked_box() {
  if (this.checked) {
    console.log(this.parentElement.style.textDecoration = "line-through")
  } else {
    console.log(this.parentElement.style.textDecoration = "none")
  }
  gjort_teller()
}

function gjort_teller() {
  let check_gjort = document.querySelectorAll('input[type="checkbox"]');
  let gjort = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (check_gjort[i].checked == true) {
      gjort += 1
      antall_gjort.innerHTML = `gjort ${gjort} av ${tasks.length} `;
    }
  }
}
