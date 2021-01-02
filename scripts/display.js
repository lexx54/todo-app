const d=document,
  $container=d.querySelector(".prin-display");



export function displayAll(){
  
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
  console.log("completed")
}