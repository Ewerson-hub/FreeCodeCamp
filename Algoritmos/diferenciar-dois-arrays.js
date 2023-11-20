//Compare dois arrays e retorne um novo array com qualquer item encontrado em apenas um dos dois arrays passados, mas não ambos. 
//Em outras palavras, retorne a diferença simétrica de dois arrays.

//Observação: você pode retornar o array com seus elementos em qualquer ordem.

//["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] deve retornar ["pink wool"]

//--------------------------------------------------------------------
function diffArray(arr1, arr2) {
  let arr = arr1.concat(arr2);
  
  //create a obj to serve as a frequency dictionary of numbers
  const obj = {}

  //map the arr and extract frequency of each repeted value
  arr.map((element) => {
    arr.forEach((elementForEach) => {
      if(element == elementForEach){
        (obj[element] != undefined)? obj[element] += 1 : obj[element] = 1;
      }
    })
  })

  //filter obj and return the value that did not repeat
  function filtresFrequency(obj){
    let number = []
    for(const value in obj){
      (obj[value] == 1)? number.push(value): NaN;
    }

    // pass the integer in number[] to int type and keep strings;
    number = number.map((element) => {
      return (Number(element) == element)? Number(element) : element;
    })
    return number;
  } 
  return filtresFrequency(obj)
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
