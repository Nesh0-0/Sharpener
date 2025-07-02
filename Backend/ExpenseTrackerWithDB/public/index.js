const form = document.querySelector("form");
const ul = document.querySelector("ul");
const deleteBtn = document.querySelectorAll("#delete-btn");
const editBtn = document.querySelectorAll("#edit-btn");
let count = 0;

window.addEventListener('DOMContentLoaded', async (event) => {
    const expenses = await axios.get('/expenses/get-expenses').then(result => {
        console.log(result.data);
        for (let expense of result.data) {
            const {id, amount, description, category} = expense;
            ul.innerHTML += `<li id="${id}">${id} - ${amount} - ${description} - ${category} <button type="button" id="${id}" onclick="handleDeleteEvent(event, ${id})">Delete</button></li> `;
        };
    }).catch(err => {
        console.log(err);
    })
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    // console.log(amount, description, category);
    let obj = {"amount": amount, "description": description, "category": category};
    const addExpense = await axios.post('/expenses/add-expense', obj).then(result => result.data).catch(err => console.log(err));
    // localStorage.setItem(++count, JSON.stringify(obj));
    const {id} = addExpense;
    ul.innerHTML += `<li id="${id}">${id} - ${amount} - ${description} - ${category} <button type="button" id="${id}" onclick="handleDeleteEvent(event, ${id})">Delete</button> </li>`
});


async function handleDeleteEvent(event, id) {
const element = document.getElementById(`${id}`);
element.remove();
const removeElement = await axios.delete(`/expenses/delete-expense/${id}`).then(result => result.data).catch(err => console.log(err));
if (removeElement) {
    console.log("Successfully removed from db");
}
else {
    console.log("Could not delete from db");
}

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

