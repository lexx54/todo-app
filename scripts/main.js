import { add } from "./addData.js";
import { complete, uncompleted } from "./complete.js";
import { deleteInfo } from "./deleteData.js";
import { createBtn, retrive } from "./display.js"

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
  retrive('opt-all');
})
document.addEventListener('click',e=>{
  if (e.target.matches(".opt-all")) retrive('opt-all');
  if (e.target.matches(".opt-active"))  retrive('opt-active');
  if (e.target.matches(".opt-completed")) {retrive('opt-completed');createBtn()}
  if (e.target.matches(".add-label")){
    add();
    retrive(d.querySelector(".selected").classList[0])//look for the element that own the selected class and pass it the first class of the list as parameter
  } 
  if (e.target.matches(".btn-in")) {

    if(e.target.checked){
      console.log("check");
      complete(e.target)
    }else{
      console.log("uncheck")
      uncompleted(e.target)
      // e.target.checked=false;
    };

    // complete(e.target);
    retrive(d.querySelector(".selected").classList[0])
  }
  if(e.target.matches(".far-del")) {
    deleteInfo(e.target)
    retrive(d.querySelector(".selected").classList[0])
    createBtn();
  }
  if(e.target.matches(".btn-info")) {
    localStorage.removeItem("completed")
    retrive(d.querySelector(".selected").classList[0])
  };
})