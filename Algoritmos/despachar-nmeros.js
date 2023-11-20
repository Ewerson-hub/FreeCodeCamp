//Dado o array arr, faça iterações sobre ele e remova cada elemento começando do primeiro elemento (o índice 0) 
//até que a função func retorne true quando o elemento iterado for passado através dele.

//Em seguida, retorne o resto do array uma vez que a condição for satisfeita, caso contrário, arr deve ser retornado como um array vazi

//ex:dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) deve retornar [3, 4]

//---------------------------------------------------------------------
function dropElements(arr, func) {
  let  satisfiedCondition = false;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i]) == true){
       satisfiedCondition = true;
      arr.splice(0,i)
      break
    }
  }
  if( satisfiedCondition == false){
    arr = []
  }
  
  
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
