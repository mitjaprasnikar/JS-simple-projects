const input = document.getElementById("input");
const add = document.getElementById("addItem");


let items = [] ;


addTodo = () => {
    const todo = {
        text:input.value,
        status:false,
        id:Date.now(),
    };

    items.push(todo);
    localStorage.setItem("todo",JSON.stringify(items));
    displayItems();
        console.log(items)

        

}

displayItems = () => {
    
    const list = document.getElementById("tasks");
    let todos = JSON.parse(localStorage.getItem("todo"));

    //Creating new Item
    let newTodo = "<ul>";
for(let i=0;i<todos.length;i++) {
        newTodo += `<li class="item-ul" style="list-style:none;" id="${todos[i].id}">${todos[i].text} <button class="remove" id="${todos[i].id}">x</button></li>`;

    }
    newTodo += "</ul>";
    list.innerHTML = newTodo;
    
    const button  = document.getElementsByClassName("remove");
    for(let i=0;i<todos.length;i++) {
        //Removing Items
        button[i].addEventListener("click", () => {
            
                items.splice(i,1);
                localStorage.setItem("todo",JSON.stringify(items));
                displayItems();
                console.log(localStorage)
                
            
        }
        )}
    }



