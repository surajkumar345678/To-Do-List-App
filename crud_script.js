let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', addText)
let parentList = document.getElementById('parentList');


function addText(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentTextName = currentInput.value

    let newLi = document.createElement('li')

    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = `<h4 class="flex-grow-1">${currentTextName}</h4> <button class="btn btn-warning mx-2" onclick="editText(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeText(this)">Remove</button>`


    parentList.appendChild(newLi)



}
function removeText(currentElement) {
    currentElement.parentElement.remove()
    let parentList = document.getElementById('parentList');
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Oops! nothing here. Please add."
        newEmptyMsg.style.color="red"
        parentList.appendChild(newEmptyMsg)
    }
}

function editText(currentElement) {
    if (currentElement.textContent == "Done") {
        currentElement.textContent = "Edit"
        let currentTextName = currentElement.previousElementSibling.value
        let currentHeading = document.createElement('h3');
        currentHeading.className = "flex-grow-1"
        currentHeading.textContent = currentTextName
        currentElement.parentElement.replaceChild(currentHeading, currentElement.previousElementSibling)

    }
    else {
        currentElement.textContent = "Done"
        let currentTextName = currentElement.previousElementSibling.textContent
        let currentInput = document.createElement('input')
        currentInput.type = "text"
        currentInput.placeholder = "Enter Text"
        currentInput.className = "form-control"
        currentInput.value = currentTextName

        currentElement.parentElement.replaceChild(currentInput, currentElement.previousElementSibling)
    }
}