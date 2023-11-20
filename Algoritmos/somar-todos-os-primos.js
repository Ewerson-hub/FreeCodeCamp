
//Um número primo é um número natural maior que 1 com exatamente dois divisores: 1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. 
//Em contrapartida, 4 não é primo, uma vez que é divisível por 1, 2 e 4.

//Reescreva sumPrimes para que ele retorne a soma de todos os números primos que são menores ou iguais a num.
//ex: sumPrimes(10) deve retornar 17.

//-----------------------------------------------------

function sumPrimes(num) {
  let primes = []

  function isPrimer(num){
    for(let i = 2; i < num; i++ ){
      if(num % i === 0){
        return false;
      }
    }
    return num > 1;
  }

  for(let i = 0; i <= num; i++){
      if(isPrimer(i)){
        primes.push(i)
      }
  }
  let result = primes.reduce((sum, element) => {return sum += element})
  console.log(result)
  return result;

}

sumPrimes(13)
