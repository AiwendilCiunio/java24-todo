import printList from "./printList.js";

export default function deleteItem(item) {
    console.log("item in i delete", item);
    
    //HÄMTA
    let todoItems = JSON.parse(localStorage.getItem("todoList"));

    // ÄNDRA
    todoItems.splice(todoItems.indexOf(item), 1);

    // FILTER
    // todoItems.filter(todo => todo.id != id);

    // SPARA
    localStorage.setItem("todoList", JSON.stringify(todoItems));
    
    printList();
}