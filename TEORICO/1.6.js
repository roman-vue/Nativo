const __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
function permutaciones(string, raiz) {
    if (raiz === void 0) {
        raiz = "";
    }
    if (string.length == 1) {
        //* último caso
        return [raiz + string];
    } else {
        var res = [];
        for (var i = 0; i < string.length; i++) {
            //* ir tomando cada uno de los caracteres como raiz
            //* como string va lo que está antes+después de ese caracter
            //* obtener recursivamente el array de permutaciones
            res.push.apply(
                res,
                permutaciones(string.substr(0, i) + string.substr(i + 1), string[i]).map(function (x) {
                    return raiz + x;
                })
            );
        }
        return res;
    }
}
function distinct(array) {
    //*eliminar repetidos en array
    return __spreadArray([], new Set(array), true);
}
function anagramas(string) {
    //* anagramas == permutaciones no repetidas
    return distinct(permutaciones(string));
}
// ------ Ejemplo ------ //
var resultado = anagramas("roman");
console.log(resultado); //! [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
