const form = document.querySelector("form");
const ul = document.querySelector("ul");
const deleteBtn = document.querySelectorAll("#delete-btn");
const editBtn = document.querySelectorAll("#edit-btn");
let count = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    // console.log(amount, description, category);
    let obj = {"amount": amount, "description": description, "category": category};
    localStorage.setItem(++count, JSON.stringify(obj));
    ul.innerHTML += `<li>${amount} - ${description} - ${category} <button type="button" id="delete-btn" onclick="handleDeleteEvent(event, ${count})">Delete</button> <button type="button" id="edit-btn" onclick="handleEditEvent(event, ${count})">Edit</button></li>`
})


function handleDeleteEvent(event, count) {
const parent = event.target.parentElement;
parent.remove();
localStorage.removeItem(count);
}

function handleEditEvent(event, count) {
    const parent = event.target.parentElement;
    parent.remove();
    let obj = localStorage.getItem(count);
    obj = JSON.parse(obj);
    form.amount.value = obj["amount"];
    form.description.value = obj["description"];
    form.category.value = obj["category"];
    localStorage.removeItem(count);


}

