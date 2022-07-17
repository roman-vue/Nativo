//**Lista De Numeros */
let numbers = [10, 8, 9, 5, 3, 78, 23];

//**Ordenar Los Nuemeros de menor a mayor */
const orden = numbers.sort((a, b) => {
    return a - b;
});
//**Imprimir en Consola */
console.log(orden);
