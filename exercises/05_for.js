/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando
cada una de las palabras. */

var a_array = ['monday','tuesday','wednesday','thursday','friday']
for(var i = 0; i < a_array.length; i++){
    alert(a_array[i])
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada. */

for(var i = 0; i < a_array.length; i++){
    alert((a_array[i].substring(0,1)).toUpperCase() + a_array[i].substring(1,a_array[i].length))
}

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir
guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */

var sentence = ''
for(var i = 0; i < a_array.length; i++){
    sentence = sentence + ' ' + a_array[i]
}
alert(sentence)

/* d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final
de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del
navegador el array final (utilizar console.log).*/

var d_array = []
for(var i = 0; i < 10; i++){
    d_array[i]=i
}
console.log(d_array)