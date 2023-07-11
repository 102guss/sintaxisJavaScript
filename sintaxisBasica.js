//serie d ejercicios en java script

console.log('hola mundo')// mensaje bienvenida
//..............................................

var a =  10;
var b = 20;
console.log(a+b);
//...............................................

function mostrarMensaje(){

console.log("hola mundito");

}
mostrarMensaje();
//...................................................
function suma(){// funcion sin parametros
    var a=10;
    var b=20;
    var result;
    result = a+b;
    return result;
    }
    
    console.log(suma());
//............................................................................    
function suma( a,  b){// funcion con parametros

return a + b;
}

console.log("la suma es: ", suma(3,5));
//................................................................
//imprimir los numeros pares
var i;
for(i=0; i<=20; i++){    
if (i%2==0){
console.log(i);
}
}
//dentifica si un numero dado es primo
//primero, calcular todos lis divisores de un numero
//mandar a imprimir solo los q tengan dos divisores

function primos(num){
var i;
var diviiores=0;

for(i=1; i<=num; i++){
if(num%i==0){
diviiores++;
}
}// fin del for
if(diviiores==2){ 
console.log("el numero "+num+ " es primo");
}
else{
    console.log('el numero '+num+' no es primo');
}
}

//llamando a la funcion
console.log(primos(3));

// proximo reto, imprimir una lista de numero primos hasta un numero dado
//hacer tablas de multiplicar
//hacer calculadora con y sin parámetros
//ejercicios con arreglos