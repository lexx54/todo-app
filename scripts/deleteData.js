import getInfo from "./complete.js";

const d=document;

export function deleteInfo(value){
  const $value=value.previousSibling.children[1].textContent;
  let erase=getInfo("completed");

  let position=erase.indexOf($value);
      erase.splice(position,1);

  localStorage.setItem("completed",erase);
}