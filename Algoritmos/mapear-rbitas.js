// Mapear órbitas

// De acordo com a Terceira Lei de Kepler, o período orbital T

// de dois pontos de massa orbitando uma à outra em uma órbita circular ou elíptica é:

// T=2πa3μ−−−√

//     a

// é o eixo semimaior da órbita
// μ=GM
// é o parâmetro gravitacional padrão
// G
// é a constante gravitacional,
// M

//     é a massa do maior corpo.

// Retorna um novo array que transforma a altitude média dos elementos em seus períodos órbita (em segundos).

// O array conterá objetos no formato {name: 'name', avgAlt: avgAlt}.

// Os valores devem estar arredondados para o número inteiro mais próximo. O corpo sendo orbitado é a Terra.

// O raio da terra é 6367,4447 quilômetros, e o valor de GM da térra é 398600,4418 km3s-2.

function orbitalPeriod(arr) {

  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  arr.forEach((e) => {
    console.log(e.avgAlt)
    e.orbitalPeriod = Math.round( (2*Math.PI)*Math.sqrt(Math.pow(earthRadius+e.avgAlt, 3) / GM));
    delete e.avgAlt
  })
  console.log(arr)
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);