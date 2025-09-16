// Get Our Elements
const saveButton = document.getElementById("btn-save");

const deleteButton = document.getElementById("btn-del");

const myForm = document.getElementById("form");

const input = document.querySelector("input");

const key = "user";

// -----------------

const getValue = () => localStorage.getItem(key);

let user = getValue();

const h4 = document.createElement("h4");
h4.classList.add("my-3");
myForm.appendChild(h4);
if (user !== null) {
  h4.innerText = `User logged: ${user}`;
} else {
  h4.innerText = `No logged user`;
}

saveButton.addEventListener("click", () => {
  localStorage.setItem(key, input.value);
  user = getValue();
  h4.innerText = `User logged: ${user}`;
  form.reset();
});

deleteButton.addEventListener("click", () => {
  user = getValue();
  user ? localStorage.removeItem(key) : alert(`Empty user`);
  h4.innerText = `No logged user`;
});
