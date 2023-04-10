let firstName; // Undefined by default
firstName = 'Victor'
console.log(firstName);

let lastName = 'David' // Declaration and asignation
lastName = 'Anna' // Reasignation
console.log(lastName);

var secondName = 'David' // Declaration and asignation
var secondName = 'Anna' // Redeclaration
console.log(secondName)

//let secondName = 'David' // Let does not allows redeclaration
//let secondName = 'Anna'

let animal = 'dog' // Let does allows reasignation
animal = 'cat' 
console.log(animal);

const fruit = 'Banana' // const does not allows reasignation
fruit = 'Apple'
console.log(fruit);

const computer = 'Asus' // const does allows declaration and asignation
console.log(computer);

// Pero const no es completamente inmutable por ejemplo en el caso de los objetos y los arrays

const vehicles = []; 
vehicles.push('Mazda')
console.log(vehicles);

// Sacando un item del array
vehicles.pop('Mazda')
console.log(vehicles);