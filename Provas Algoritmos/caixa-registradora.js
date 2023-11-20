//Implemente uma função de caixa registradora checkCashRegister() que aceita o preço de compra como o primeiro argumento (price), 
//pagamento como o segundo argumento (cash) e dinheiro na registradora (cid) como o terceiro argumento.

//cid é um array de duas dimensões listando a moeda disponível e a quantidade.

//A função checkCashRegister() deve sempre retornar um objeto com a chave status e uma chave change.

//Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se você não pode retornar o troco exato.

//Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o valor para a chave change se for igual ao troco devido.

//Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor, como o valor da chave change.

//Veja abaixo um exemplo de um array de dinheiro no caixa (cid):

//[
  //["PENNY", 1.01],
  //["NICKEL", 2.05],
  //["DIME", 3.1],
  //["QUARTER", 4.25],
  //["ONE", 90],
  //["FIVE", 55],
  //["TEN", 20],
  //["TWENTY", 60],
  //["ONE HUNDRED", 100]
//]

//ex:checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
//["ONE HUNDRED", 100]]) deve retornar {status: "OPEN", change: [["QUARTER", 0.5]]}

//------------------------------------------------------
function checkCashRegister(price, cash, cid) {
  let coinsValue = [
    {name :"ONE HUNDRED", value : 100},
    {name :"TWENTY" , value : 20},
    {name :"TEN", value : 10},
    {name :"FIVE", value : 5},
    {name :"ONE", value : 1},
    {name :"QUARTER", value : 0.25},
    {name :"DIME", value : 0.1},
    {name :"NICKEL", value : 0.05},
    {name :"PENNY", value : 0.01},
  ];

  
  coinsValue.map(coin => {
    cid.map(cid => {
      if(cid[0] == coin.name){
        coin.amount = Math.round(cid[1] / coin.value)
      }
    })
  })
  
  let change = (cash - price > 0)? Math.round((cash - price)*100) / 100 : (cash - price == 0)? 0 : -1;

  if(change === 0 || change === totalCid(coinsValue)){
    return {status: "CLOSED", change: cid}
  }
  if(change < 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if(change > 0){
    if(checkIfExistsChange(change, coinsValue)){
      let value = calculateChange(change, coinsValue)
      return { status: "OPEN", change: value}
    }else{
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  }
 
}
function totalCid(obj){
  let total = 0;
  obj.forEach(e => total += e.value * e.amount)
  return total
}

function checkIfExistsChange(change, coinsValue){
  let changeValue = change;
  let total = 0;
  let copyCoinsChange = JSON.parse(JSON.stringify(coinsValue));

  for(let coin of  copyCoinsChange){
    while(coin.value <= change && coin.amount > 0){
      coin.amount -= 1
      change -= coin.value;
      change = Math.round(change * 100) / 100
      total += coin.value;
    }
  }
  total = Math.ceil(total * 100) / 100;
  return (total == changeValue)? true : false;
}

function calculateChange(change, coinsValue){
  let save = []
   for(let coin of coinsValue){
    while(coin.value <= change.toFixed(2) && coin.amount > 0){
      change -= coin.value
      coin.amount -= 1;
      save.push([coin.name, coin.value])
    }
  }
  return organizeArr(save) 
}

function organizeArr(arr){
  let obj = []
  let lastIndex;

  for(let coin of arr){
    if(obj.length == 0){
      obj.push([coin[0],coin[1], 1]);
      lastIndex = 0;
    }else{
      if(obj[obj.length - 1][0] == coin[0]){
        obj[obj.length - 1][2] += 1
      }else{
        obj.push([coin[0],coin[1], 1]); 
      }
    }
  }
  let arrReturn = [];
  obj.forEach(e => {
    arrReturn.push([e[0], e[1] * e[2]])
  })
  return arrReturn;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
