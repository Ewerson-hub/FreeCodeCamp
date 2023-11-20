//Você receberá um array inicial (o primeiro argumento na função destroyer), seguido por um ou mais argumentos. 
//Remova todos os elementos da matriz inicial que são do mesmo valor que esses argumentos.

//Observação: você tem que usar os arguments do objeto.
//ex: destroyer([1, 2, 3, 1, 2, 3], 2, 3) deve retornar [1, 1].

//---------------------------------------------------------------------------------------------------------

function destroyer(arr) {
  let args = [];
  //get the other parameter arguments
  for(let arg in arguments){
    (arg != 0)? args.push(
        Number.isInteger(arguments[arg])? Number(arguments[arg]) : arguments[arg]
      ) : undefined;
  }
  
  let value = []
  arr.forEach((arr) => {
    let meet = false;
    args.forEach((arg) => {
      (arr === arg)? meet = true : undefined;
    });
    
    (meet == false)? value.push(arr): undefined;
  })

  return value;
}

destroyer(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
