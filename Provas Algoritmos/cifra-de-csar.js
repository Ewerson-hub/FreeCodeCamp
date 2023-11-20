
//Uma das cifras mais simples e mais conhecidas é a cifra de César, também conhecida como uma cifra de mudança. 
//Em uma cifra de transferência, os significados das letras são deslocados de acordo com a quantidade definida.

//Um uso moderno comum é a cifra ROT13, onde os valores das letras são deslocados em 13 lugares. Da seguinte forma: A ↔ N, B ↔ O e assim por diante.

//Escreva uma função que recebe uma string codificada de ROT13 como entrada e retorna uma string decodificada.

//Todas as letras serão maiúsculas. Não transforme nenhum caractere não-alfabético (ou seja, espaços, pontuação), mas passe por eles.

//ex:rot13("SERR PBQR PNZC") deve decodificar para a string FREE CODE CAMP

//----------------------------------------------------------
function rot13(str) {
  //this function will decode the str
  const decode = (string) => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let index = alphabet.indexOf(string) + 13;
    return (index < 26)? alphabet[index]: alphabet[index - 26];
  }
  
  let strDecoded = "";
  str.split("").forEach(e => { 
    ((/[\s]/.test(e))||(/[\W]/.test(e)))? strDecoded += e :  strDecoded += decode(e);
  });
  return strDecoded;
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
