function Person(height, weight) {
  if (typeof(height) !== 'number' || isNaN(height))
    throw Error('Height is not valid as a number...');
  if (typeof(weight) !== 'number' || isNaN(weight))
    throw Error('Weight is not valid as a number...');
  
  this._height = height;
  this._weight = weight;
  this.getHeight = function() {
    return this._height;
  }
  this.getWeight = function() {
    return this._weight;
  }
}

function Dietician(height, weight) {
  Person.call(this, height, weight);
  this.calculateImc = function(callback) {
    var result = this.getWeight() / this.getHeight() ** 2;
    callback(result);
    return result;
  }
}
Dietician.prototype = Object.create(Person.prototype);
Dietician.prototype.constructor = Dietician;


function createDietician(inputHeight, inputWeight) {
  var height = parseFloat(inputHeight);
  var weight = parseFloat(inputWeight);
  
  return new Dietician(height, weight);
}

function calculateBuilder() {
  console.log('construindo a minha closure para manipulacao do evento de clique...');
  var heightElem = document.getElementById('height');
  var weightElem = document.getElementById('weight');
  var imcElem = document.getElementById('imc');

  return function() {
    console.log('calculando o IMC utilizando os valores do escopo léxico...');
    var dietician = createDietician(heightElem.value, weightElem.value);
    dietician.calculateImc(function (resultado) {
      imcElem.innerHTML = resultado;
    });
  }
}

window.onload = function(evt) {
  console.log('carreguei o conteúdo...');
  var btn = document.querySelector('div.form button');
  btn.addEventListener('click', calculateBuilder());
}

console.log('executei o script...');