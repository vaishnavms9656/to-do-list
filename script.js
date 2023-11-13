function addText(){
    var li = document.createElement("li")
    var input = document.getElementById("input-text").value;
    var txt = document.createTextNode(input);
    li.appendChild(txt);

    if(input === ''){
        alert("Please provide a text !");
    }
    else{
        document.getElementById("tasks").appendChild(li)

    }
    document.getElementById("input-text").value = "";
    addButtons(li)

}
function addButtons(li){
var editBtn = document.createElement("button")
editBtn.innerHTML='<i class="fas fa-pen"></i>';
editBtn.onclick = function(){
    editTask(li);
}

var deleteBtn = document.createElement("button")
deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
deleteBtn.onclick =  function(){
    deleteTask(li)
}

li.appendChild(editBtn);
li.appendChild(deleteBtn);
}

function editTask(li) {
    var newText = prompt("Edit Task:", li.textContent);
    if (newText !== null) {
        li.firstChild.nodeValue = newText;
    }
}

function deleteTask(li){
    var parent = li.parentNode;
    console.log(parent);
    parent.removeChild(li);
}
