import { displayActive, displayAll, displayCompleted } from "./display.js"



document.addEventListener('click',e=>{
  if (e.target.matches(".opt-all")) displayAll();
  if (e.target.matches(".opt-active"))  displayActive();
  if (e.target.matches(".opt-completed")) displayCompleted();
})