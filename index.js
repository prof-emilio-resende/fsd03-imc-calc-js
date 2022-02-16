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
  this.calculateImc = function() {
    return this.getWeight() / this.getHeight() ** 2;
  }
}
Dietician.prototype = Object.create(Person.prototype);
Dietician.prototype.constructor = Dietician;


function createDieticianFromForm() {
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);
  
  return new Dietician(height, weight);
}

function imprimirResultado(resultado) {
  document.getElementById('imc').innerHTML = resultado;
}

function calculate() {
  var dietician = createDieticianFromForm();
  resultado = dietician.calculateImc();
  imprimirResultado(resultado);
}