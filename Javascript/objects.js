let myObject = {
  stringKey: 'value', // propiedad
  numberKey: 4, // también una propiedad
  booleanKey: true, // otra propiedad más
  methodKey: function consoleKitten() { // y aquí tenemos un método
    console.log('kitten!');
  }
};

console.log(myObject.stringKey);
console.log(myObject["numberKey"]);
console.log(myObject["methodKey"]);



console.log("---------------------")


let customer = {
  name: 'Elise Bouer', // el valor de la propiedad es una cadena
  age: 24, // el valor de la propiedad es un número
  greet: function () { // el valor de la propiedad es una función
    console.log("Hello customer!")
  }
};

console.log(customer)


// función que imprime información sobre el cliente
function printCustomerInfo(person) {
  console.log(person.name + " is " + person.age + " years old.");
}

// llamar a la función anterior
printCustomerInfo(customer);

// función que devuelve información sobre el cliente
function getCustomerInfo(person) {
  return "name :" + person.name + ", age: " + person.age;
}
// crear la propiedad "info"
customer.info = getCustomerInfo(customer);






console.log("---------------------")




console.log(customer.info)
console.log(customer)

let emplyee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

function getFullName(emplyee){
  console.log(employee.firstName + " " + emplyee.lastName);
}

getFullName(emplyee);




console.log("---------------------")


let employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

function getFullName(employee) {
  return employee.firstName + " " + employee.lastName;
}

console.log(getFullName(employee))

console.log("--------válido-----------")


let employee4 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

function getFullName(employee4) {
  return employee4.firstName + ' ' + employee4.lastName;
}

employee.fullName = getFullName(employee4);

console.log(employee4);