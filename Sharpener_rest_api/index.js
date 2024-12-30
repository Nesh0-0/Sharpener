const ul = document.querySelector("ul");
const name_input = document.querySelector("#name");
const mobile_input = document.querySelector("#mobile");
const address_input = document.querySelector("#address");

window.addEventListener("DOMContentLoaded", async () => {
    const data = await axios.get("https://crudcrud.com/api/4142d350de2d430bbfc8efc12bece6dd/data").then(res => res.data).catch((err) => { console.log(err) });
    for (let object of data) {
        const { _id, name, mobile, address } = object;
        ul.innerHTML += `<li id="${mobile}">${name} - ${mobile} - ${address} <button type="button" onclick=editBtn('${_id}')>Edit</button> <button type="button" onclick="deleteBtn('${_id}')">Delete</button></li>`;
        localStorage.setItem(_id, JSON.stringify({ name, mobile, address }));
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
    const data = await axios.post("https://crudcrud.com/api/4142d350de2d430bbfc8efc12bece6dd/data", { "name": name, "mobile": mobile, "address": address })
        .then(res => res.data).catch((err) => { console.log(err) });
    const { _id } = data;
    const obj = { "name": name, "mobile": mobile, "address": address };
    localStorage.setItem(_id, JSON.stringify(obj));
    ul.innerHTML += `<li id="${mobile}">${name} - ${mobile} - ${address} <button type="button" onclick=editBtn('${_id}')>Edit</button> <button type="button" onclick="deleteBtn('${_id}')">Delete</button></li>`
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
    await axios.delete(`https://crudcrud.com/api/4142d350de2d430bbfc8efc12bece6dd/data/${id}`);
    console.log("deleted successfully");
}

module.exports = { formSubmit, editBtn, deleteBtn, deleteDetails, uploadDetails };