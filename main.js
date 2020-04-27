let form = document.getElementById("form")
let getItem = document.getElementById("getItem")
let list = document.getElementById("list")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(getItem.value)
})

function createItem(x) {
    let htmlAdd = `<li>${x} <button onclick="deleteItem(this)"> Delete </button></li>`
    list.insertAdjacentHTML("beforeend", htmlAdd)
    getItem.value = ''
    getItem.focus()
}

function deleteItem(x){
    x.parentElement.remove()
}