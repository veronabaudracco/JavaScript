/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado
en una variable, mostrando el valor de dicha variable en la consola del navegador. */
/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta
aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function sum(number1,number2){
    if (notANumber(number1,number2) != NaN){
        if (!validate_integer(number1)){
            alert(number1 + ' ' + 'has decimals')
            return number1 = Math.round(number1)    
        } else if (!validate_integer(number2)) {
            alert(number2 + ' ' + 'has decimals')
            return number2 = Math.round(number2)
        } else {
            return number1 + number2
        }
    }    
}
var result = sum('Hello',27)
console.log(result)

/* c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

function validate_integer(number){
        return Number.isInteger(number)
    }
var c_result = validate_integer(3)
console.log(c_result)


/* e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga
funcionando igual.*/

function notANumber(number1, number2){
    if (Number.isNaN(number1)){
        alert(number1 + ' has an error')
        return NaN;
    } else if (Number.isNaN(number2)){
        alert(number2 + ' has an error')
        return NaN;
    }
}
