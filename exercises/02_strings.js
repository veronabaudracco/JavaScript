/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var a_phrase = 'learning JavaScript'
console.log(a_phrase.toUpperCase())

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando
 el resultado en una nueva variable (utilizar substring).*/

 var b_phrase = 'learning JavaScript'
 var b_newPhrase = b_phrase.substring(0,5)
 console.log(b_newPhrase)

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando
el resultado en una nueva variable (utilizar substring).*/

var c_phrase = 'learning JavaScript'
var c_newPhrase = c_phrase.substring(16,19)
console.log(c_newPhrase)

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las
demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var d_phrase1 = 'learning JavaScript'
var d_phrase2 = (d_phrase1.substring(0,1)).toUpperCase()
var d_phrase3 = (d_phrase1.substring(1,19)).toLowerCase()
var d_newPhrase = d_phrase2 + d_phrase3
console.log(d_newPhrase)

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio
en blanco y guardarla en una variable (utilizar indexOf).*/

var e_phrase = 'learning JavaScript'
var e_blankSpace = e_phrase.indexOf(' ')
console.log(e_blankSpace)

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos
de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var f_phrase = 'incredibly embarassed'
var f_blankSpace = f_phrase.indexOf(' ')
var f_newPhrase = (f_phrase.substring(0,1)).toUpperCase() + (f_phrase.substring(1,f_blankSpace)).toLowerCase() + ' ' +
(f_phrase.substring(f_blankSpace + 1,f_blankSpace + 2)).toUpperCase() + (f_phrase.substring(f_blankSpace + 2, f_phrase.length)).toLowerCase()
console.log(f_newPhrase)
