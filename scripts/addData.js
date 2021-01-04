import getInfo from "./complete.js";

const d=document;
  

export function add(){
  const $input=d.querySelector(".add-input").value;
  let data=getInfo('tasks'),
    regex=/^\s+[\w]?/;

    if($input && !regex.test($input)) if (!data.includes($input)) data.push($input);

  localStorage.setItem(`tasks`,data);
}