// Transformar de binário em string

// Retorne uma frase traduzida para o inglês da string binária passada.

// A string binária será separada por espaço.

//----------------------------------------------------------------

function binaryAgent(str) {
  let arr = str.split(" ");
  let chars = [];
  arr.map((e)=>{
    let char = 0;
    for(let i = 0; i < e.length; i++){
      char += (e[(e.length -1 - i)] * Math.pow(2,i)) 
    }
    chars.push(char.toString())
  })
  let result = []
  chars.forEach((val) => {
    result.push(String.fromCharCode(val))
  })
  
  return result.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
