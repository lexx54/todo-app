const d=document;

export function complete(value){
  // value.parentNode.style.textDecoration="line-through";
  value.parentNode.className="completed";

  let erase=localStorage.getItem("completed")
  ? localStorage.getItem("completed").split(",")
  :[],
  val=value.nextSibling.textContent;

  if (!erase.includes(val)) erase.push(val);

  localStorage.setItem("completed",erase)

  let data=localStorage.getItem("tasks")
  ? localStorage.getItem("tasks").split(",")
  :[];

  let info=[];

  for (let word of erase){
    if(data.includes(word)){
      let position=data.indexOf(word);
      data.splice(position,1);
      console.log(data);
    }
  }

  // console.log(info);
  localStorage.setItem("tasks",data)
// console.log(value.nextSibling.textContent)
}