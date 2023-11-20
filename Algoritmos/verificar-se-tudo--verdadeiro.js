// Verificar se tudo é verdadeiro

// Verifique se o predicado (segundo argumento) é truthy em todos os elementos de uma coleção (primeiro argumento).

// Em outras palavras, você recebe uma coleção de array de objetos. O predicado pre será uma propriedade de objeto e 
// /você precisa retornar true se seu valor for truthy. Caso contrário, retorne false.

// Em JavaScript, valores truthy são valores que traduzem para true quando avaliados em um contexto booleano.

//-----------------------------------------------------------------------------
function truthCheck(collection, pre) {
  let result = true;

  for(let i in collection){
    if(!!collection[i][pre] != true){
      result = false;
    }
  }
  return result;
}

//testing code
console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")
)
truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")
