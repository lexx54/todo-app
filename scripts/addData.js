const d=document;
  

export function add(){
  const $input=d.querySelector(".display-input").value;
  let data=localStorage.getItem('tasks')
    ?localStorage.getItem('tasks').split(",")
    :[];
  
    if (!data.includes($input)) data.push($input);

  localStorage.setItem(`tasks`,data);
  console.log($input)
  console.log("add")
}