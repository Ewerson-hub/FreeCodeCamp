
//Encontre a letra que falta no intervalo de letras passado e devolva-a.

//Se todas as letras estiverem presentes no intervalo, retorne undefined.
//ex: earNotLetter("abce") deve retornar a string d.

//--------------------------------------------------------------

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz.".split("");
  let compare = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length-1])+1);

  let newStr = '';
  let meet = false

  compare.map((element, index)=>{
    if(meet == false){
      if(element == str[index]){
        newStr = undefined 
      }else{
        meet = true;
        newStr = element
      }}
  });
  return newStr;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz")
