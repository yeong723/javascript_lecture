const createBtm = document.querySelector("#create")
const container = document.querySelector(".container")
var items = document.querySelectorAll(".items")

createBtm.addEventListener("click", function(){
    items = document.querySelectorAll(".items")
    var newItem = document.createElement("div");
    newItem.setAttribute("draggable", "true");
    newItem.className = "items";
    newItem.textContent = "Item"+String(items.length+1);
    newItem.style.top = 300+(items.length*2)+'px'
    newItem.style.left = 300+(items.length*2)+'px'
    container.appendChild(newItem);
})
