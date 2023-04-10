var a // Declaration
let b = 'b' // Declaration and asignation
b = 'bb' // Reasignation
var a = 'aa' //Redeclaration

//Global scope 
var fruit = 'Apple'

function printFruit() {
    console.log(fruit);
}

printFruit()

// This is important for the presentation
// A variable no declared can be global
function cuontries() {
    country = 'Colombia'
    console.log(country);
}

cuontries()
console.log(country);