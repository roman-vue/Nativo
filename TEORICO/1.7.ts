function permutaciones(string, raiz = "") {
    if (string.length == 1) {
        //* último caso
        return [raiz + string];
    } else {
        let res = [];
        for (let i = 0; i < string.length; i++) {
            //* ir tomando cada uno de los caracteres como raiz
            //* como string va lo que está antes+después de ese caracter
            //* obtener recursivamente el array de permutaciones
            res.push(...permutaciones(string.substr(0, i) + string.substr(i + 1), string[i]).map((x) => raiz + x));
        }
        return res;
    }
}

function distinct(array) {
    //*eliminar repetidos en array
    return [...new Set(array)];
}

function anagramas(string) {
    //* anagramas == permutaciones no repetidas
    return distinct(permutaciones(string));
}

// ------ Ejemplo ------ //
var resultado = anagramas("roman");

console.log(resultado); //! [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
