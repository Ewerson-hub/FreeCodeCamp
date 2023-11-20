
//Faça uma função que olha através de um array de objetos (primeiro argumento) e retorna um array de todos os objetos que têm pares de nome e valor correspondentes
//(segundo argumento). 
//Cada par de nome e valor do objeto fonte tem que estar presente no objeto da coleção se ele for ser incluído no array retornado.

//Por exemplo, se o primeiro argumento é [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
//e o segundo argumento é { last: "Capulet" }, em seguida, você deve retornar o terceiro objeto do array (o primeiro argumento), 
//porque contém o nome e o seu valor, que foi passado como segundo argumento.


//-----------------------------------------------------------------
function whatIsInAName(collection, source) {
  // Altere apenas o código abaixo desta linha

  function objForArray(obj, insertIndex){
    let arr = [];
    for(let index in obj){
     (insertIndex === false)? arr.push(obj[index]) : 
     arr.push(index, obj[index])
    }
    return arr
  }

  let collectionArray = objForArray(collection, false);
  let sourceArray = objForArray(source, true);

  let resultArray = [];
  collectionArray.map((element) => {
    let meet = 0;
    sourceArray.map( e => {
      (objForArray(element, true).includes(e))? meet++: undefined;
    })

    if(meet == sourceArray.length){
      resultArray.push(element)
    }
    
  })
  // Altere apenas o código acima desta linha
  return resultArray;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
