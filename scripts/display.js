const d=document,
  $container=d.querySelector(".prin-display");

export function retrive(type){
  let task=localStorage.getItem("tasks") //get the elemments from task
  ? localStorage.getItem("tasks").split(",")
  :[];

  let completed=localStorage.getItem("completed") //get the elements from completed
  ? localStorage.getItem("completed").split(",")
  :[];

  let erase=$container.children[1];
  while(erase.firstChild) erase.removeChild(erase.lastChild); //erase all the elements before apply more

  if(type==="all"){
    $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;
    displayInfo(task)
    displayInfo(completed,'checked','completed');
  } else if( type==='act'){
    $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;
    displayInfo(task);
  } else if(type==="com"){
    displayInfo(completed,'checked','completed');
  }
}

function displayInfo(type){
  for (let i=0; i<type.length; i++){
    const $para=d.createElement("p"),
      $btn=d.createElement("input"),
      $label=d.createElement("label");

    if(arguments[1]) $btn.checked=arguments[1];
    if(arguments[2]) $label.className=arguments[2];
    $btn.type="checkbox";
    $btn.className="btn-in";
    $label.textContent=`${type[i]}`;
    $para.appendChild($btn);
    $para.appendChild($label);

    $container.children[1].appendChild($para)
  }
}