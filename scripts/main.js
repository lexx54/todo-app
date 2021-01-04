import { add } from "./addData.js";
import { complete, uncompleted } from "./complete.js";
import { changeMode, setMode } from "./darkMode.js";
import { deleteInfo } from "./deleteData.js";
import { createBtn, retrive } from "./display.js"

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
  retrive('opt-all');
  setMode();
})
d.addEventListener("",e=>{
  
})
document.addEventListener('click',e=>{
  if (e.target.matches(".opt-all")) retrive('opt-all');
  if (e.target.matches(".opt-active"))  retrive('opt-active');
  if (e.target.matches(".opt-completed")) retrive('opt-completed');
  if (e.target.matches(".add-label")){
    add();
    retrive(d.querySelector(".selected").classList[0])//look for the element that own the selected class and pass it the first class of the list as parameter
  } 
  if (e.target.matches(".btn-in")) {

    if(e.target.checked)complete(e.target)
    else uncompleted(e.target);
    retrive(d.querySelector(".selected").classList[0])
  }
  if(e.target.matches(".far-del")) {
    deleteInfo(e.target)
    retrive(d.querySelector(".selected").classList[0])
    // createBtn();
  }
  if(e.target.matches(".btn-info")) {
    localStorage.removeItem("completed")
    retrive(d.querySelector(".selected").classList[0])
  };
  if(e.target.matches(".dark-mode-cont")){
    changeMode();
    setMode();
  } 
})