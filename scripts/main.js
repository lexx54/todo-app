import { add } from "./addData.js";
import { complete } from "./complete.js";
import { retrive } from "./display.js"

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
})
document.addEventListener('click',e=>{
  if (e.target.matches(".opt-all")) retrive('all');
  if (e.target.matches(".opt-active"))  retrive('act');
  if (e.target.matches(".opt-completed")) retrive('com');
  if (e.target.matches(".display-label")) add();
  if (e.target.matches(".btn-in")) complete(e.target);
  if(e.target.matches(".fa-trash-alt")) console.log(e.target.previousSibling.children[1].textContent)
})