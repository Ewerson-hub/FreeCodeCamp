//Achate um array aninhado. Você deve lidar com diferentes níveis de aninhamento.
//ex: steamrollArray([[["a"]], [["b"]]]) deve retornar ["a", "b"]

//---------------------------------------------------------------
function steamrollArray(arr) {
  let result = []
  function goDownLayer(arr){
    arr.forEach((e) => {
      (Array.isArray(e))? goDownLayer(e):result.push(e);
    })
  }

  goDownLayer(arr);

  return result;
}

steamrollArray([1, [2], [3, [[4]]] ]);
