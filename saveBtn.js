import printList from "./printList.js";

let newItem = document.getElementById("newItem");
let saveBtn = document.getElementById("saveBtn");

export default  saveBtn.addEventListener("click", () => {
    console.log("klick på knapp", newItem.value);

    // HÄMTA
    let todoItems = JSON.parse(localStorage.getItem("todoList"));

    // ÄNDRA
    todoItems.push(newItem.value);

    // SPARA
    localStorage.setItem("todoList", JSON.stringify(todoItems));

    newItem.value = "";
    
    console.log("listan efter push", todoItems);
    printList();
})