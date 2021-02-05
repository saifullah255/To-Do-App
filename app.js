function setTodo() {
    var share = document.getElementById("share");
    var main = document.getElementById("main");
    var div = document.createElement("div");
    var h2 = document.createElement("h2");
    div.appendChild(h2);
    div.setAttribute("class", 'card');
    var h2text = document.createTextNode(share.value);
    h2.appendChild(h2text);
    main.appendChild(div);


    share.value= ""


    //delete button
    var dltBtn = document.createElement("button")
    var btnText = document.createTextNode("Delete")
    dltBtn.appendChild(btnText);
    dltBtn.setAttribute("class", 'btnstyle')
    dltBtn.setAttribute("onclick", "deleteItems(this)")
    div.appendChild(dltBtn);


    //add button
    var AddBtn = document.createElement("button")
    var btnText = document.createTextNode("EDIT")
    AddBtn.appendChild(btnText);
    AddBtn.setAttribute("class", 'btnstyle')
    AddBtn.setAttribute("onclick", "addItems(this)")
    div.appendChild(AddBtn)

}


function deleteItems(e){
   e.parentNode.remove();
}


function addItems(e){
    
    var edit = prompt("edit to do" , e.parentNode.firstChild.innerHTML)

    e.parentNode.firstChild.innerHTML = edit;

 }


function deleteall(){
    main.innerHTML = ""
}




  