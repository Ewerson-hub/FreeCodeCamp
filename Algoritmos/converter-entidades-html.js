//Converta os caracteres &, <, >, " (aspas duplas) e ' (aspas simples), em uma string para suas entidades HTML correspondentes.
//ex:convertHTML("Dolce & Gabbana") deve retorna a string Dolce &amp; Gabbana

//-----------------------------------------------------

function convertHTML(str) {
  let obj ={
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;",
    "'" : "&apos;",
    '"' : "&quot;"
  }

  let arr = str.split("")
  let newArr = []
  arr.map((e) => {
    if(e.match(/[<>&'"]/) == null){
      newArr.push(e)
    }else{
      newArr.push(obj[e])
    }
  })
  
  return newArr.join("");
}

convertHTML('Stuff in "quotation marks"')
