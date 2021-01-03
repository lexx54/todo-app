const d=document,
  $container=d.querySelector(".prin-display");



export function displayAll(){
  const data=[];
  for(let i=0;i<localStorage.length;i++){
    if(data.includes(`action${i}`)) data.push(localStorage.getItem(`action${i}`));
  }
  console.log(data)
  $container.innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;
  console.log("all")
}

export function displayActive(){
  
  $container.innerHTML=`<input type="text" placeholder="add details" class="display-input" name="info">
  <label class="display-label" name="info">Add</label>`;
  console.log("active")
}
export function displayCompleted(){
  $container.innerHTML="";
  console.log("completed")
}