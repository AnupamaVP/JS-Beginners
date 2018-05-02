let f= document.getElementById("submit");
let c=document.getElementById("textbox");
let todo=document.getElementById("todo");
let in_progress=document.getElementById("in_progress");
let in_review=document.getElementById("in_review");
let done=document.getElementById("done");
let modal=document.getElementById("modal");
let edtbox=document.getElementById("modal-textbox");
let closeBtn=document.getElementById("close");
let i=1;
function addItem()
{if(c.value!== "")
{
  var newItem = document.createElement("div"); 
  var newTask = document.createElement("div"); 
  var editBtn = document.createElement("div"); 
  var delBtn = document.createElement("div"); 
  editBtn.className="edit";
  delBtn.className="del";
  newItem.className="card";
  newItem.draggable="true"; 
  newTask.className="newtask";
  todo.appendChild(newItem);
  newItem.appendChild(newTask);
  newTask.innerHTML=c.value;
  newItem.appendChild(editBtn);
  newItem.appendChild(delBtn);
  c.value="";
  delBtn.setAttribute('data-parentid', 'task'+i);
  editBtn.setAttribute('data-textid','text'+i);
  newItem.id="task"+i;
  newTask.id="text"+i;
  i++;
  newItem.ondragstart=drag;
  editBtn.onclick=handleEdit;
  delBtn.onclick=handleDel;
  
}

}
function handleClick(e){
  if(e.keyCode==13){
   addItem();
  }
  return;
}
f.onclick= addItem;  
c.onkeypress=handleClick;
function allowDrop(event){
    event.preventDefault();
}
function handleDrop(ev){
    ev.preventDefault();
    if(ev.target.className==="box")
    {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }

}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

todo.ondragover= allowDrop;
in_progress.ondragover= allowDrop;
in_review.ondragover= allowDrop;
done.ondragover= allowDrop;
  
todo.ondrop= handleDrop;
in_progress.ondrop= handleDrop;
in_review.ondrop= handleDrop;
done.ondrop= handleDrop;

function handleEdit(ev){
 var ed = document.getElementById(ev.target.getAttribute('data-textid'));
modal.style.display="block";
edtbox.value=ed.innerHTML;

edtbox.onkeypress= (ev) =>{if(ev.keyCode===13){
    ed.innerHTML=edtbox.value;
    modal.style.display="none";
 } }
 closeBtn.onclick= () =>{
    ed.innerHTML=edtbox.value;
    modal.style.display="none";
 }

}

function handleDel(ev){
 
 var element=document.getElementById(ev.target.getAttribute('data-parentid'));
 element.parentNode.removeChild(element);

 }

 function saveChange(ev){
     if(ev.keyCode===13){
        var sc=document.getElementById(ev.target.getAttribute('data-textid'));
        sc.innerHTML=edtbox.value;
     }
 }
