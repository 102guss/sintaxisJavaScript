//condicionales y estructuras de control

//tramitación de INE

var edad = 18;

if (edad >= 18){
console.log('ya puedes tramitar tu INE');
}
else{
    console.log('aún no puedes tramitar tu INE');
}
//.........................................................
//usando condicional triple

var edad2 = 17;
if(edad2==18){
    console.log('es momento de  tramitar tu INE');
    
}

else if(edad2>18){
    console.log('puedes tramitar tu INE');
}
else{
    console.log('aún no puedes tramitar tu INE');
}
//-----------------------------------------------------
//l mismo pero ahora con funciones

 function funcionTramitar(edad2){

    if(edad2==18){
        console.log('es momento de  tramitar tu INE');
        
    }
    
    else if(edad2>18){
        console.log('puedes tramitar tu INE');
    }
    else{
        console.log('aún no puedes tramitar tu INE');
    }
}

//mandando llamar a la funcion con su respectivo parámetro
//console.log(funcionTramitar(18));// para imprimir en pantalla
var x;
x = funcionTramitar(20);
console.log(x);