
//Escreva uma função que recebe dois ou mais arrays e retorne um novo array de calores únicos na ordem do array original fornecido.

//Em outras palavras, todos os valores presentes de todos os arrays devem ser incluídos na sua ordem original, mas sem valores duplicados no array final.

//Os números únicos devem ser ordenados pela sua ordem original, mas o array final não deve ser ordenado em ordem numérica.

//ex: uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) deve retornar [1, 3, 2, 5, 4]

//-------------------------------------------------------------------
function uniteUnique() {
  let arr = []
  //getting values ​​from arguments and inserting them into an arr 
  for(let indexX in arguments){
    for(let i = 0; i < arguments[indexX].length; i++){
      arr.push(arguments[indexX][i])
    }
  }

  //filtering repeated numbers
  let filteredArr = []
  arr.filter((e, index) => {
    if(arr.indexOf(e) === index){
      filteredArr.push(e) 
    } 
  })

  return filteredArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
