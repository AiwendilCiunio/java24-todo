import printList from "./printList.js";
import saveBtnEvent from "./saveBtn.js";

// INIT IF FÖR ATT KOLLA OM LS FINNS
if (!localStorage.getItem("todoList")) {
    console.log("LS existerar inte! Skapa ett nytt");
    let todoItems = ["Loopa alla items", "Lägga till nya items", "Ta bort en item", "Använd localStorage", "Dela upp kod i moduler"];
    localStorage.setItem("todoList", JSON.stringify(todoItems));
    console.log(localStorage.getItem("todoList"));
    
} else {
    console.log("LS Fans, använd det!");  
}

printList();