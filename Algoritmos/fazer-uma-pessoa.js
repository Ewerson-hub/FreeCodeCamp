//Preencha o construtor do objeto com os seguintes métodos abaixo:

// - getFirstName()
// - getLastName()
// - getFullName()
// - setFirstName(first)
// - setLastName(last)
// - setFullName(firstAndLast)

//Execute os testes para ver a saída esperada para cada método. Os métodos que recebem um argumento têm de aceitar apenas um argumento e tem de ser uma string. 
//Estes métodos devem constituir o único meio de interação com o objeto.

//------------------------------------------------------------------
const Person = function(firstAndLast) {
  // Altere apenas o código abaixo desta linha
  // Complete o método abaixo e implemente os outros da mesma forma
  let fullName = firstAndLast;
  this.getFullName = function() {
    return fullName;
  };

  this.setFullName = function (name) {
    fullName = name;
  }
  
  //getters
  this.getFirstName = function(){ 
    return fullName.split(" ")[0];
  };
  this.getLastName = function (){
    return fullName.split(" ")[1];
  };
  //setters
  this.setFirstName = function(name){
    fullName = name + " "+ fullName.split(" ")[1];
  }
  this.setLastName = function (last){
    fullName = fullName.split(" ")[0] +" "+last;
  }
};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob).length)

console.log(bob.getFullName())
bob.getFullName();
