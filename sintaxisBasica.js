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
for(i=0; i<=20; i++){    //if (i%1==0 && i%i==0)
if (i%2==0){
console.log(i);
}
}
//dentifica si un numero dado es primo

function primo(num){
var i;
var cont;
for(i=num; i>1; i--){
console.log(i);
}
}

console.log(primo(10));

//imporime los numeros menores a 10
var i;
for(i=10; i>0; i--){
console.log(i);
}
