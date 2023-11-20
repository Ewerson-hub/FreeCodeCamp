
//Realize uma busca e substitua na frase usando os argumentos fornecidos e retorne a nova frase.

//O primeiro argumento é a frase para realizar a busca e substituir.

//O segundo argumento é a palavra que você substituirá (antes).

//O terceiro argumento é com o que você vai substituir o segundo argumento (depois).

//Observação: preserve a capitalização do primeiro caractere na palavra original quando você estiver substituindo. 
//Por exemplo, se você quiser substituir a palavra Book com a palavra dog, deve ser substituído com Dog

//----------------------------------------------
function myReplace(str, before, after) {
  let arr = [];
  str.split(" ").forEach((element,index) => {
    if(element == before){
      (/[A-Z]/.test(element[0]))? arr.push(after[0].toUpperCase()+ after.substr(1)): arr.push(after.toLowerCase());
    }else{
      arr.push(element)
    }
  })
  
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
