//1 Obtener las referencias de los elementos a interactuar
 
/*let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")*/
 
// Registrar el Evento
 
/*post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)*/



$("#ButtonPost").on('click', function(e) {
    //alert($(this).text())
    e.preventDefault()
    
    let list = $("#todoList")
    
    let div = $("<div>")
    let input = $('<input type="checkbox" name="todo">')
    let label = $("<label>")
    
    label.text($("#todoText").val())
    
    list.append(div)
    div.append(input)
    div.append(label)

})


$("#ButtonClear").on('click', function(e) {
    //alert($(this).text())
    let todos = $("[name='todo']")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = false
    }
})



$("#ButtonMark").on('click', function(e) {
    //alert($(this).text())
    let todos = $("[name='todo']")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = true
    }
})
 

$("#ButtonDelete").on('click', function(e) {
    //alert($(this).text())
    let todos = $("[name='todo']")

    for(let i = 0; i< todos.length; i++){
  
        if (todos[i].checked){
            todos[i].parentElement.remove()
        }
 
    }
})

