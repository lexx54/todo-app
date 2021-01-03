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

  retrive();
  console.log("all")
}

export function displayActive(){
  $container.children[0].innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;
  console.log("active")
}
export function displayCompleted(){
  $container.children[0].innerHTML="";
  console.log("completed")
}

function retrive(){
  let data=localStorage.getItem("tasks")
  ? localStorage.getItem("tasks").split(",")
  :[];

  let erase=$container.children[1];
  while(erase.firstChild) erase.removeChild(erase.lastChild); //erase all the elements before apply more
  

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
}