const d=document,
  $container=d.querySelector(".prin-display");

export function displayAll(){
  $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;

  retrive("all");
  console.log("all")
}

export function displayActive(){
  $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;
  retrive("act")
  console.log("active")
}
export function displayCompleted(){
  $container.children[0].innerHTML="";
  retrive("com");
  console.log("completed")
}

function retrive(type){
  let task=localStorage.getItem("tasks")
  ? localStorage.getItem("tasks").split(",")
  :[];

  let completed=localStorage.getItem("completed")
  ? localStorage.getItem("completed").split(",")
  :[];

  let erase=$container.children[1];
  while(erase.firstChild) erase.removeChild(erase.lastChild); //erase all the elements before apply more

  if(type==="all"){
    for (let i=0; i<task.length; i++){
      const $para=d.createElement("p"),
        $btn=d.createElement("input"),
        $label=d.createElement("label");

      $btn.type="checkbox";
      $btn.className="btn-in"
      $label.textContent=`${task[i]}`
      $para.appendChild($btn);
      $para.appendChild($label);

      $container.children[1].appendChild($para)
    }
    for (let i=0; i<completed.length; i++){
      const $para=d.createElement("p"),
        $btn=d.createElement("input"),
        $label=d.createElement("label");

      $btn.type="checkbox";
      $btn.className="btn-in";
      $btn.checked='checked';
      $label.className="completed"
      $label.textContent=`${completed[i]}`
      $para.appendChild($btn);
      $para.appendChild($label);

      $container.children[1].appendChild($para)
    }
  } else if( type==='act'){
    for (let i=0; i<task.length; i++){
      const $para=d.createElement("p"),
        $btn=d.createElement("input"),
        $label=d.createElement("label");

      $btn.type="checkbox";
      $btn.className="btn-in"
      $label.textContent=`${task[i]}`
      $para.appendChild($btn);
      $para.appendChild($label);

      $container.children[1].appendChild($para)
    }
  } else if(type==="com"){
    for (let i=0; i<completed.length; i++){
      const $para=d.createElement("p"),
        $btn=d.createElement("input"),
        $label=d.createElement("label");

      $btn.type="checkbox";
      $btn.className="btn-in";
      $btn.checked='checked';
      $label.className="completed"
      $label.textContent=`${completed[i]}`
      $para.appendChild($btn);
      $para.appendChild($label);

      $container.children[1].appendChild($para)
    }
  }
}