import { add } from "./addData.js";
import { complete } from "./complete.js";
import { deleteInfo } from "./deleteData.js";
import { retrive } from "./display.js"

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
})
document.addEventListener('click',e=>{
  if (e.target.matches(".opt-all")) retrive('opt-all');
  if (e.target.matches(".opt-active"))  retrive('opt-active');
  if (e.target.matches(".opt-completed")) retrive('opt-completed');
  if (e.target.matches(".add-label")){
    add();
    retrive(d.querySelector(".selected").classList[0])//look for the element that own the selected class and pass it the first class of the list as parameter
  } 
  if (e.target.matches(".btn-in")) complete(e.target);
  if(e.target.matches(".fa-trash-alt")) {
    deleteInfo(e.target)
    retrive(d.querySelector(".selected").classList[0])
  }
})