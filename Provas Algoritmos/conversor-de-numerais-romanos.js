//Converta o número dado em um número romano.
//Todos os números romanos devem ser em maiúsculas.

//------------------------------------------------------------------
function convertToRoman(num) {
  // let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  // }
  let romanNumbers = [
    [1000, "M"],
    [900 ,  "CM"],
    [500 , "D"],
    [400, "CD"],
    [100, "C"],
    [90 , "XC"],
    [50 ,"L"],
    [40, "XL"],
    [10 , "X"],
    [9, "IX"],
    [5 , "V"],
    [4 , "IV"],
    [1 , "I"],
  ]
  let convertedNumber = "";
  romanNumbers.map((roman) => {
    if(num == 0){
      return undefined
    }else{
      for(let i = 0; i < 9999; i++){
        if(num == 0){
          break;
        }
        if(num >= roman[0]){
         convertedNumber += roman[1];
         num -= roman[0];
       }
      }
    }
  })
  console.log(convertedNumber)

  return convertedNumber;
}

convertToRoman(36);
