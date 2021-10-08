/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
"Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

var a_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(a_array[4],a_array[10])

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

var b_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(b_array.sort())

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push). */ 

var c_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
c_array.unshift('2021')
c_array.push('2022')
console.log(c_array)

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */

var d_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
d_array.shift()
d_array.pop()
console.log(d_array)

/* e) Invertir el orden del array (utilizar reverse). */

var e_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(e_array.reverse())

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). Crear una copia
del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var f_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(f_array.join('-'))
console.log(f_array.slice(4,11))



