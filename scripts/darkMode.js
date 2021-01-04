const d=document;

export function changeMode(){
  let mode=localStorage.getItem("theme"),
  $btn=d.querySelector(".dark-mode-cont");
  

  if(mode==="light"){
    $btn.classList.add("changeDark");
    $btn.textContent="🌙";
    
    localStorage.setItem("theme",'dark');

  }else if (mode==="dark"){
    $btn.classList.remove("changeDark");
    $btn.textContent="☀️";
  
    localStorage.setItem("theme","light");

  }
console.log("dark")
}

export function setMode(){
  let mode=localStorage.getItem("theme")?localStorage.getItem("theme"):(localStorage.setItem("theme","light"),"light"),
  $btn=d.querySelector(".dark-mode-cont"),
  $border=d.querySelector(".dark-mode");

  if(mode==="light"){
    $btn.style.backgroundColor="#7cdf64";
    $border.style.border="1px solid black";
    $btn.classList.add("changeDark");
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    $btn.textContent="🌙";
  }else if (mode==="dark"){
    $btn.classList.remove("changeDark");
    $btn.style.backgroundColor="red";
    $btn.textContent="☀️";
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    $border.style.border="1px solid white";
  }

}