const ul = document.querySelector("ul");
const name_input = document.querySelector("#name");
const mobile_input = document.querySelector("#mobile");
const address_input = document.querySelector("#address");

window.addEventListener("DOMContentLoaded", async () => {
    const data = await axios.get("/users/get-users").then(res => res.data).catch((err) => { console.log(err) });
    console.log(data);
    for (let object of data) {
        const { id, name, mobile, address } = object;
        ul.innerHTML += `<li id="${mobile}">${id} - ${name} - ${mobile} - ${address} <button type="button" onclick=editBtn('${id}')>Edit</button> <button type="button" onclick="deleteBtn('${id}')">Delete</button></li>`;
        localStorage.setItem(id, JSON.stringify({ name, mobile, address }));
    }
})

function formSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const mobile = event.target.mobile.value;
    const address = event.target.address.value;
    uploadDetails(name, mobile, address);
}

async function uploadDetails(name, mobile, address) {
    const data = await axios.post("/users", { "name": name, "mobile": mobile, "address": address })
        .then(res => res.data).catch((err) => { console.log(err) });
    console.log(data);
    const { id } = data;
    const obj = { "name": name, "mobile": mobile, "address": address };
    localStorage.setItem(id, JSON.stringify(obj));
    ul.innerHTML += `<li id="${mobile}">${id} - ${name} - ${mobile} - ${address} <button type="button" onclick=editBtn('${id}')>Edit</button> <button type="button" onclick="deleteBtn('${id}')">Delete</button></li>`
}

function editBtn(id) {
    const obj = JSON.parse(localStorage.getItem(id));
    name_input.value = obj.name;
    mobile_input.value = obj.mobile;
    address_input.value = obj.address;
    deleteDetails(id, obj.mobile);
}

function deleteBtn(id) {
    const obj = JSON.parse(localStorage.getItem(id));
    deleteDetails(id, obj.mobile);
}

async function deleteDetails(id, mobile) {
    localStorage.removeItem(id);
    const elementToDelete = document.getElementById(mobile);
    elementToDelete.remove();
    await axios.delete(`/users/${id}`);
    console.log("deleted successfully");
}

module.exports = { formSubmit, editBtn, deleteBtn, deleteDetails, uploadDetails };