const d=document;

export function changeMode(){
  let mode=localStorage.getItem("theme"),
  $btn=d.querySelector(".dark-mode-cont");
  

  if(mode==="light"){
    $btn.classList.add("changeDark");
    $btn.textContent="🌙";
    localStorage.setItem("theme","dark");

  }else if (mode==="dark"){
    $btn.classList.remove("changeDark");
    $btn.textContent="☀️";
    localStorage.setItem("theme","light");
  }
console.log("dark")
}