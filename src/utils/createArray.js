


export const newArray = (n)=>{
 
  let array = [];
  for(let i=0; i < n; i++){
    array.push(i+1);
  }
  return array;
}; 

export function shuffle(array){
  for(let i = array.length-1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [array[i],array[j]] = [array[j], array[i]];
  } 
  return array;
}
export function getArray(n){
  const bigChungusArray =[...newArray(n), ...newArray(n)]; 
  return shuffle(bigChungusArray.map((b=>{
    return {value: b, isFound: false, isUncovered: false};
  })));
}
