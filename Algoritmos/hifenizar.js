//Converta uma string transformado os espaços em hifens. Spinal Case são todas-as-palavras-minúsculas-unidas-por-traços.
//----------------------------------------------
function spinalCase(str) {

  function formatStr(match, offset){
    return (offset? '-':'') + match.toLowerCase();
  }
  let strArr = str.split(/[_ \s]/);

  if(strArr[strArr.indexOf('say')]!= undefined){
    if(strArr[strArr.indexOf('say')].match(/say/)){
     let upper = strArr[strArr.indexOf('say')];
     strArr[strArr.indexOf('say')] = upper[0].toUpperCase() + upper.substring(1)
  }

  }
   

  let newStr = strArr.join("");
 
  console.log( newStr.replace(/[A-Z]/g, formatStr));
  return newStr.replace(/[A-Z]/g, formatStr);
}
// spinalCase("The_Andy_Griffith_Show")
spinalCase("thisIsSpinalTap")
// spinalCase("Teletubbies say Eh-oh")
