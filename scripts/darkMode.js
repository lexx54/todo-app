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
  let mode=localStorage.getItem("theme"),
  $btn=d.querySelector(".dark-mode-cont");;

  if(mode==="light"){
    $btn.classList.add("changeDark");
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    $btn.textContent="🌙";
  }else if (mode==="dark"){
    $btn.classList.remove("changeDark");
    $btn.textContent="☀️";
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  }

}