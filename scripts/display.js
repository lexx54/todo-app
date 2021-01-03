const d=document,
  $container=d.querySelector(".prin-display");



export function displayAll(){
  // const data=[];
  // for(let i=0;i<localStorage.length;i++){
  //   if(data.includes(`action${i}`)) data.push(localStorage.getItem(`action${i}`));
  // }
  // console.log(data)
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
  console.log("completed")
}

function retrive(type){
  let data=localStorage.getItem("tasks")
  ? localStorage.getItem("tasks").split(",")
  :[];

  let erase=$container.children[1];
  while(erase.firstChild) erase.removeChild(erase.lastChild); //erase all the elements before apply more

  if(type==="all"){
    for (let i=0; i<data.length; i++){
      const $para=d.createElement("p"),
        $btn=d.createElement("input"),
        $label=d.createElement("label");

      $btn.type="checkbox";
      $btn.className="btn-in"
      $label.textContent=`${data[i]}`
      $para.appendChild($btn);
      $para.appendChild($label);

      $container.children[1].appendChild($para)
    }
  } else if( type==='act'){
    let data2=data.filter(ele=>ele.className!=='completed')
    for (let i=0; i<data2.length; i++){
      const $para=d.createElement("p"),
        $btn=d.createElement("input"),
        $label=d.createElement("label");

      $btn.type="checkbox";
      $btn.className="btn-in"
      $label.textContent=`${data2[i]}`
      $para.appendChild($btn);
      $para.appendChild($label);

      $container.children[1].appendChild($para)
    
    }
  }

    
}