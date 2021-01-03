
export function retrive(){
  const data=[];
    for(let i=0;i<localStorage.length;i++){
      data.push(localStorage.getItem(`action${i}`));
    }
  if (data.includes(null)) return;
  return data;
}