// Encontrar o menor múltiplo comum

// Encontre o menor múltiplo comum dos parâmetros fornecidos que podem ser divididos sem resto por ambos, bem como por todos os números sequenciais no intervalo entre esses parâmetros.

// O intervalo será um array de dois números que não estará necessariamente em ordem numérica.

// Por exemplo, se forem dados 1 e 3, encontre o menor múltiplo comum de 1 e 3 que também é divisível por todos os números entre 1 e 3. A resposta aqui seria 6.

function smallestCommons(arr) {
  arr = arr.sort((a,b) => a > b);
  let newArr = []
  let result = [];
  for(let i = arr[0]; i <= arr[arr.length-1]; i++){
    newArr.push(i);
  }
  
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 
                29, 31, 37, 41, 43, 47, 53, 59, 
                61, 67, 71, 73, 79, 83, 89, 97, 101];
// percorre o array primes -> 
// percorre o array newArr ->
// garante que o valor do newArr é divisivel pelo numero ṕrimo ->
// chama a funçaõ factor() para ver quantas vezes o expoente cabe na base
// salva o retorno com maior quantidade
// e por fim eleva o numero primo pela maior quantidade retornada 

   primes.forEach((primes) => {
     let greatestExponent = 0
      newArr.forEach((num, index)=>{
        if(num % primes === 0){
           if(factor(num, primes) > greatestExponent){
             greatestExponent = factor(num, primes);
           }  
        }
        if((num == newArr[newArr.length -1]) && (greatestExponent > 0)){
          result.push(primes**greatestExponent) 
        }
      })
    })

    //retorna o numero de vezes que o expoente cabe na base;
    function factor(base, exp){
      let result = 0;
      for(let i = 0; i < 100; i++){
        if(base % exp != 0){
          break;
        }else{
          base /= exp
          result++;
        }
      }
      return result
    }
    //multiplica todos os valores entre si
    result=result.reduce((sum, e)=>{
      return sum *= e
    })
    
  return result;
}

smallestCommons([5, 1]);
// smallestCommons([2, 10])