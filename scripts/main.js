import { add } from "./addData.js";
import { displayActive, displayAll, displayCompleted } from "./display.js"

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
})
document.addEventListener('click',e=>{
  if (e.target.matches(".opt-all")) displayAll();
  if (e.target.matches(".opt-active"))  displayActive();
  if (e.target.matches(".opt-completed")) displayCompleted();
  if (e.target.matches(".display-label")) add();
  if (e.target.matches(".btn-in")) console.log("done")
})