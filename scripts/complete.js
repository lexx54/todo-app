const d=document;

export function complete(value){
  let erase=getInfo('completed'),
    data=getInfo('tasks'),
    val=value.nextSibling.textContent;

  value.parentNode.className="completed";

  if (!erase.includes(val)) erase.push(val);

  for (let word of erase){
    if(data.includes(word)){
      let position=data.indexOf(word);
      data.splice(position,1);
    }
  }

  localStorage.setItem("completed",erase)
  localStorage.setItem("tasks",data)
}
export function uncompleted(value){
  let data=getInfo("tasks"),
    erase=getInfo("completed"),
    val=value.nextSibling.textContent;

  value.parentNode.className="";

  if (!data.includes(val)) data.push(val); 

  for (let word of data){
    if(erase.includes(word)){
      let position=erase.indexOf(word);
      erase.splice(position,1);
      console.log(data);
    }
  }

  localStorage.setItem("tasks",data)
  localStorage.setItem("completed",erase)
}

export default function getInfo(info){
  return localStorage.getItem(info)? localStorage.getItem(info).split(","):[];
}