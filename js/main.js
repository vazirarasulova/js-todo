let elInput = document.querySelector(".input");
let elBtn = document.querySelector(".btn");
let elList = document.querySelector(".list");

let todos = [];
let i = 0;

elBtn.addEventListener("click", function(){

  
  let elVal = elInput.value;
  
  let obj = {
    id: i += 1,
    text: elVal
  }
  
  todos.push(obj);
  elList.innerHTML = null;
  elInput.value = null;

  renderTodo();

})


function renderTodo(){
  for(let i of todos){
    let elItem = document.createElement("li");
    let elDelete = document.createElement("button");
    

    elItem.classList.add("item")
    elDelete.classList.add("remove")

    elDelete.textContent = "x";

    elDelete.addEventListener("click", function(){
      todos = todos.filter(item => item.id != i.id)
      elItem.remove()
    })

    elItem.addEventListener("click", function(){
      let updateInput = document.createElement("input");
      let updateBtn = document.createElement("button");

      updateInput.classList.add("update");
      updateBtn.classList.add("updateBtn");

      updateBtn.textContent = "Update";

      elItem.appendChild(updateInput);
      elItem.appendChild(updateBtn);

      updateBtn.addEventListener("click", function(){
        let index = todos.findIndex(item => item.id == i.id);

        todos[index].text = updateInput.value;
        elItem.textContent = updateInput.value;
      })
    })

  
    elItem.textContent = i.text;

    elItem.appendChild(elDelete);
    elList.appendChild(elItem);
  }

}



