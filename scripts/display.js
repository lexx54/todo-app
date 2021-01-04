const d=document,
  $container=d.querySelector(".prin-display"),
  $options=d.querySelector(".prin-options").children;

export function retrive(type){
  let task=localStorage.getItem("tasks") //get the elemments from task
  ? localStorage.getItem("tasks").split(",")
  :[];

  let completed=localStorage.getItem("completed") //get the elements from completed
  ? localStorage.getItem("completed").split(",")
  :[];

  let erase=$container.children[1];
  while(erase.firstChild) erase.removeChild(erase.lastChild); //erase all the elements before apply more



  if(type==="opt-all"){
    //remove the class from the other option before applying it
    $options[1].classList.remove('selected');
    $options[2].classList.remove('selected');

    $options[0].classList.add('selected');
    $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="add-input" name="info">
  <label class="add-label" name="info">Add</label>`;
    displayInfo(task)
    displayInfo(completed,'checked','completed');
  } else if( type==='opt-active'){
    //remove the class from the other option before applying it
    $options[0].classList.remove('selected');
    $options[2].classList.remove('selected');

    $options[1].classList.add('selected');
    $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="add-input" name="info">
  <label class="add-label" name="info">Add</label>`;
    displayInfo(task);
  } else if(type==="opt-completed"){
    //remove the class from the other option before applying it
    $options[1].classList.remove('selected');
    $options[0].classList.remove('selected');

    $options[2].classList.add('selected');
    $container.children[0].innerHTML='';
    displayInfo(completed,'checked','completed');
  }
}

function displayInfo(type){
  for (let i=0; i<type.length; i++){
    const $cont=d.createElement("div"),
      $in=d.createElement("input"),
      $label=d.createElement("label"),
      $span=d.createElement("span"),
      $pic=d.createElement("i");

    $in.type="checkbox";
    $in.className="btn-in";
    $label.textContent=`${type[i]}`;

    $span.appendChild($in);
    $span.appendChild($label);
    
    if(arguments.length>1) {

      $in.checked=arguments[1];
      $label.className=arguments[2];
      $pic.classList.add("far","fa-trash-alt")

      $cont.appendChild($span);
      $cont.appendChild($pic);
    } else $cont.appendChild($span);
    $container.children[1].appendChild($cont);
  }
}