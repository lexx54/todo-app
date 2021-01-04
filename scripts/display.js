import getInfo from "./complete.js";

const d=document,
  $container=d.querySelector(".prin-display"),
  $options=d.querySelector(".prin-options").children;

export function retrive(type){
  let task=getInfo("tasks");

  let completed=getInfo("completed");

  let erase=$container.children[1];
  while(erase.firstChild) erase.removeChild(erase.lastChild); //erase all the elements before apply more

  if(type==="opt-all"){
    //remove the class from the other option before applying it
    $options[1].classList.remove('selected');
    $options[2].classList.remove('selected');
    //apply the class to the current page
    $options[0].classList.add('selected');

    createInput()
    displayInfo(task)
    displayInfo(completed,'checked','completed');
  } else if( type==='opt-active'){
    //remove the class from the other option before applying it
    $options[0].classList.remove('selected');
    $options[2].classList.remove('selected');

    $options[1].classList.add('selected');
    createInput()
    displayInfo(task);
  } else if(type==="opt-completed"){
    //remove the class from the other option before applying it
    $options[1].classList.remove('selected');
    $options[0].classList.remove('selected');

    $options[2].classList.add('selected');
    while($container.children[0].firstChild) $container.children[0].removeChild($container.children[0].lastChild);
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
      $pic.classList.add("far","fa-trash-alt","far-del")

      $cont.appendChild($span);
      $cont.appendChild($pic);
    } else $cont.appendChild($span);

    $container.children[1].appendChild($cont);
    
  }
  if(d.querySelector(".selected").classList[0]==="opt-completed")createBtn();
}

function createInput(){
  const $input=d.createElement("input"),
    $label=d.createElement("label"),
    $head=$container.children[0];

    while($head.firstChild) $head.removeChild($head.lastChild);

    $input.placeholder="Add Details";
    $input.classList.add("add-input");
    $input.name='info';

    $label.classList.add("add-label");
    $label.name='info';
    $label.textContent="Add"

    $head.appendChild($input);
    $head.appendChild($label);
}
export function createBtn(){
  const $div=d.createElement("div"),
    $para=d.createElement("p"),
    $ic=d.createElement("i"),
    $text=d.createTextNode("Delete All");

    $ic.classList.add("far","fa-trash-alt")

    $para.appendChild($ic);
    $para.appendChild($text);
    $para.classList.add("btn-info");

    $div.classList.add("btn-aside");

    $div.appendChild($para);

    $container.children[1].appendChild($div)

}