// Una una funcion que esta dentro de otra funcion 
// pued acceder a las variables de la funcion padre

const global = 0

function bigFunction() {
    const myNumber = 1
    console.log(global);

    function parent() {
        const inner = 2
        console.log(global, myNumber);

        function child() {
            console.log(global, myNumber, inner);
        }
        return child()
    }
    return parent()
}
bigFunction()