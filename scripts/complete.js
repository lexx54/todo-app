const d=document;

export function complete(value){
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

  for (let word of erase){
    if(data.includes(word)){
      let position=data.indexOf(word);
      data.splice(position,1);
    }
  }

  localStorage.setItem("tasks",data)
}
export function uncompleted(value){
  value.parentNode.className="";

  let data=localStorage.getItem("tasks")
  ? localStorage.getItem("tasks").split(",")
  :[],
  val=value.nextSibling.textContent;

  if (!data.includes(val)) data.push(val);

  localStorage.setItem("tasks",data)

  let erase=localStorage.getItem("completed")
  ? localStorage.getItem("completed").split(",")
  :[];

  for (let word of data){
    if(erase.includes(word)){
      let position=erase.indexOf(word);
      erase.splice(position,1);
      console.log(data);
    }
  }

  localStorage.setItem("completed",erase)
}