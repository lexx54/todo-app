const d=document;

export function deleteInfo(value){
  const $value=value.previousSibling.children[1].textContent;
  let erase=localStorage.getItem("completed")
  ? localStorage.getItem("completed").split(",")
  :[];

  let position=erase.indexOf($value);
      erase.splice(position,1);

  localStorage.setItem("completed",erase);
  console.log("erase "+erase);
}