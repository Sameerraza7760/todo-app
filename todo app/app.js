var list=document.getElementById("list")
function addtodo (){
    var todoitem=document.getElementById("todo-item")
   var li=document.createElement('li')
   var litext= document.createTextNode(todoitem.value) 
   li.appendChild(litext)
   //create delete button
   var delbtn=document.createElement('button')
   var deltext=document.createTextNode('Delete')
   delbtn.setAttribute("class","btn")
   delbtn.setAttribute("onclick",'delbtn(this)')
    delbtn.appendChild(deltext) 
 //create a edit button
 var editbtn=document.createElement('button')
 var edittext=document.createTextNode('Edit')
 editbtn.appendChild(edittext)
    li.appendChild(delbtn)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick",'editbtn(this)')
  
  
   list.appendChild(li)
 
   todoitem.value=""
   console.log (li)
}
//create a delete all button
function delbtn(e){
    e.parentNode.remove()
}
function deteteall(){
    list.innerHTML=''
}

function editbtn(e){
  
    console.log(e.parentNode.firstChild.nodeValue)
    var val =prompt('enter a ubdated value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}