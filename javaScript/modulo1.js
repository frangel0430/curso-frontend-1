console.log('Hola desde el modulo 1 ');
/*
Este es un comenterio
en bloque
*/

//Este es un comentario en linea 

/*
  QUE SON LAS VARIABLES 
  las variables son contenedores de informacion, es decir, son espacios en memoria que almacenan un valor
*/

let nombre = 'Juan'

/*
La palabra reservada let se utiliza para declarar una variable, es decir 
Para indicar que una variable existe, luego de esta palabra viene el nombre de la variable
una variable no puede tener espacioss, ni caracteres especiales, i empezar con numeros
ni ser una palabra reservada 

ejemplos incorrectos 

let 1nombre='Juan'
let nombre-1='Juan'
let nombre 1='Juan'
let let='Juan'

si deseas colocar un espacio en el nombre de la variable, puedes utilizar el guion o el camelCase

let nombre_completo = 'Juan Rodriguez'
let nombreCompleto  = 'Juan Rodriguez'

luego del nombre va el signo de igual, que es el operador de asignaciion, y luego el valor que queremos asignar a la variable, en este caso 'Juan',
que es un string, es decir, una cadena de texto 

*/

/* 
let nombre = 'Pedro' 
La linea de arriba estaria erronea, debido a que la declaracion de una variable solo se realiza una 
sola vez, si queremos cambiar el valor de la variable, no debemos volver a declararla, 
sino simplemente asignarle un nuevo valor

*/

nombre = 'Pedro' //Reasignacion de variable 


//EJERCICIO MENTAL 

let a = "Pedro"
let b = "Juan"
let c = b

c = b
b = c
c = a
a = b

//Que valor contiene la variable A? R:Juan

a = "Rodriguez"
b = "Barrios"
c = "Rojas"

a = b //Barrios 
c = b //Barrios
b = b //Barrios
b = c //Barrios
a = c //Barrios
c = a //Barrios
b = c //Barrios

//Que valor contiene la variale c  R: Barrios 

/**
 * En javaScript el ; no es obligatorio, pero es una buena practica 
 * utilizarlo para indicar el final de una instriccion, ademas de que puede evitar errores en el codigo,
 * ya que el interprete de javascript puede interpreta el codigo de una manera diferente si no se utiliza los ;

no es lo mismo 

a = b =c = "juan";
que decir 
a = b; c = "juan";
 */

/*
Tipos de datos 
En javaScript existen varios tipos de datos, entre los cuales se encuentran: 
-Sring: es una cadena de texto, se representa entre comllas simples o dobles, por ejemplo : "Hola mundo", 'Hola mundo'
-Nmber: es un numero, puede ser entero o decimal, por ejemplo: 10,3.14
-Boolean: es un valor logico, puede ser true o false, por ejemplo: true,false 
-Null: es un valor nulo, es decir, no tiene valor, se representa con la palabra reservada null, por ejemplo:null 
-Undefined: es un valor indefinido, es decir, no se le ha asignado un valor a la variable, se representa con la palabra reservada undefined
-Object: es un tipo de dato complejo, que puede contener varias propiedades y metodos, se representa con llaves {}, por ejemplo: {nombre: " Juan"}
-Array: es un tipo de dato complejo, que puede contener varios valores, se representa con corchetes [], por ejemplo: [1,2,3,4,5]

*/
let texto = 'Hola mundo';//String
let numero = 10; //Nmber
let booleano = true; // Boolean
let nulo = null; //Null
let indefinido; //Undefined
let objeto = {nombre:"Juan", edad :30}; //Object
let arreglo = [1,2,3,4,5] //arry 

nombre = "Juan"
apellido ="Rodriguex"
let nombreCompleto = nombre + " " + apellido  //Concatenacion de strings 
a =5 
b = "10"

let suma = a +b 
console.log(suma)

/*
operadores aritmeticos 
+suma 
-resta
*multiplicacion
/division
% modulo
**potencia

*/ 

/*
OPERADOR DE ASIGNACION 

= ASIGNACION 

+= SUMA Y ASIGNACION
-= RESTA Y ASIGNACION
*= MULTIPLICACION Y ASIGNACION 
/= DIVISION Y ASIGNACION 
%= MODULO Y ASIGNACION
** POTENCIA Y ASIGNACION

*/ 

a = 10;
a += 5 
a -=3
a *= 2
a /= 4 
a %=3
a**= 2 
a 

/*OPERADOR DE COMPARACION 

== IGUALDAD
=== IGUALDA ESTRICTA 
!= desigualdad 
!== desigualdad estricta
> mayor que 
< menor que 
>= mayor o igual que 
<= menos o igual que 
*/

1 ==2  //false
2==2 // true
2=='2' //true
2 === '2'//false
2!= 2   //false
2!=3  //true
2!='2'  //false
2!== '2'  //true 
2>3  //false 
3 <2 //false
2 >= 2  //true 
0<=3 //true

/*OPERADORES LOGICOS
&& ANDO (Y)
|| OR (O)
! NOT (NO)

*/



