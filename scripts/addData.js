const d=document;
  

export function add(){
  const $input=d.querySelector(".add-input").value;
  let data=localStorage.getItem('tasks')
    ?localStorage.getItem('tasks').split(",")
    :[],
    regex=/^\s+[\w]?/;

    if($input && !regex.test($input)) if (!data.includes($input)) data.push($input);

  localStorage.setItem(`tasks`,data);
  console.log($input)
  console.log("add")
}