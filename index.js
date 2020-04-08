// Scope
// Es el alcance o visibilidad de los elementos de JS. --> Local y Global
/* LOOP / BUCLE / ITERACIONES  --> FOR - WHILE - DO WHILE - FOR EACH - MAP 

for (let i = 0 ; i < 10 ; i++){
    console.log(`Numero: ${i}`)
}


for (let i = 0 ; i < 10 ; i++){
    if(i == 5){
        console.log('voy en el 5')
        continue
    }
    console.log(`${i}`)
}

for (let i = 0 ; i < 10 ; i++){
    if(i == 5){
        console.log('voy en el 5')
        break
    }
    console.log(`${i}`)
}

for (let i = 0 ; i < 10 ; i++){
    if(i % 2 == 0){
        console.log(`${i} es par`)
    }
    else{
        console.log(`${i} es impar`)
    }
}

const arreglosProductos = ['camisa', 'boleto', 'guitarra'];

for(i = 0; i <= 2; i++){
    console.log(`Tu producto ${arreglosProductos[i]} fue registrado`)
}


let i = 0;

while(i < 10) {
    if(i===5){
        console.log('cinco');
        i++
        break
    }
    console.log(i);
    i++;
}

let x = 1000;

do {
        console.log(`${x}`);
        x++;
} while(x<10);


const pendientes = ['tarea', 'comer', 'proyecto', 'aprender'];

pendientes.forEach(function(pendiente, index){
    console.log(`${index} : ${pendiente}`)
});

console.log(pendientes)

const carrito = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'juguete'},
];
const nombreProducto = carrito.map(function(carrito){
                    return carrito.producto;
})
console.log(nombreProducto);

const automovil = {
    modelo: 'camaro',
    motor: 6.1,
    año: 2020
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}
*/
/* CONDICIONALES

let efectivo = 300;
credito = 400;
totalCarrito = 500;
disponible = efectivo+credito;
disponibleConDescuento = (disponible/2) + credito;

if(totalCarrito < efectivo || totalCarrito < credito){
    console.log ("Puedo pagar sin descuento");
}
else if(totalCarrito < disponible  && totalCarrito < disponibleConDescuento){
    console.log ("Puedo pagar con descuento");
}
else {console.log('No puedo pagar')}

const logueado = false;

console.log(logueado === true ? 'puedo ingresar' : 'no puedo ingresar')

const metodoDePago = 'bitcoins';

switch(metodoDePago) {
    case 'efectivo': 
        console.log(`el usuario pago con ${metodoDePago}`);
        break;
    case 'tarjeta': 
        console.log(`el usuario pago con ${metodoDePago}`);
        break;
    case 'bitcoins': 
        console.log(`el usuario pago con ${metodoDePago}`);
        break;
}

let mes;
switch(new Date().getMonth()) {
    case 0:
        mes = 'enero';
        break;
    case 1:
        mes = 'febrero';
        break;
    case 2:
        mes = 'marzo';
        break;
    case 3:
        mes = 'abril';
        break;
    case 4:
        mes = 'mayo';
        break;
    case 5:
        mes = 'junio';       
        break;    
    case 6:
        mes = 'enero';
        break;
    case 7:
        mes = 'febrero';
        break;
    case 8:
        mes = 'marzo';
        break;
    case 9:
        mes = 'abril';
        break;
    case 10:
        mes = 'mayo';
        break;
    case 11:
        mes = 'junio';       
        break;                                     
                        }

console.log(`este mes es ${mes}`)
*
/* FECHA
const DiaHoy = new Date();

let valor;

valor = DiaHoy.getMonth();

valor = DiaHoy.getDay();

valor = DiaHoy.getDate();

valor = DiaHoy.getFullYear();

valor = DiaHoy.setFullYear(2016);

console.log(valor) */
/* FUNCIONES

const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo Musica con ${id}`);
    },
    pausar: function(){
        console.log(`No Reproduciendo Musica`);
    }
}
musica.borrar = function(id){
    console.log(`Reproduciendo Musica con ${id}`);
}
    musica.reproducir(30);
    musica.pausar();
    musica.borrar(4);
*/
/*IIFE o FUNCIONES INVOCADAS O DECLARADAS INMEDIATAS

(function () {
    console.log('creando un IIFE');
})();

(function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('js');
*/
/* Function expresion

const saludar = function (nombre = 'visitante', edad = 20, trabajo = 'desarrollador'){
return `hola mis datos son: ${nombre}, ${edad}, ${trabajo}`;
}
console.log(saludar('attilio',));

const suma = function(a,b){
 return a + b;
}
console.log(suma(1,3));
*/
/* Function declaration;

function saludar(nombre = 'visitante'){
    return `'hola' ${nombre}`;
}

let saludo = saludar('attilio');

console.log(saludo);

a) function sumar(a,b,c){ --> mismo orden a y b
    return a + b + c; --> puede tener un orden diferente
}
 
b) let suma = sumar(1,1,1); --> mismo orden de parametros a y b
suma = sumar(1,1,2);
suma = sumar(1,1,2);

console.log(suma); */
/* function sum (a,b){
    console.log(a+b); //--> solo imprime un valor
}
sum(12,23)
sum(12,-3)

function saludar (nombre) {
    console.log(`hello ${nombre}`);
}
saludar('alma')
saludar('attilio')
saludar('win')

function saludar () {
    console.log('hello')
}
saludar()
*/
/* Funciones que vienen por default en JS
console.log('hola');
alert('error');
prompt('que es el coronavirus')

/*

/*
var n = ['ass',32]   

for (var i = 0; i < 19; i++) {
   
   console.log(n);
 } 
*/
/*OBJETOS

-- objetos en arreglos-->  `${autos[i].modelo} ${autos[i].motor}` greatwall, haval, jac

const autos = [
    {modelo:'greatwall', motor: 1.2, color:'ojro'},
    {modelo:'haval', motor: 1.4, color:'verde'},
    {modelo:'jac', motor: 2.1, color:'naranjo'},
];

autos[0].modelo='jaguar';

for(let i = 0; i < autos.length; i++) {
console.log(autos[i]); 
} 
*/
/*--objetos en objetos

const persona = {
    nombre:'attilio',
    apellido:'giglio',
    email:'correo@correo.com',
    edad:'27',
    musica:['rock', 'electro', 'hip-hop'],
    hogar: {
        pais:'chile',
        ciudad:'santiago',
    },
    nacimiento: function(){
        return new Date().getFullYear()-this.edad;
    }
}
*/
/* ARRAY

const  numero = [0,1,2,3,4,5]
const number = new Array(5,4,3,2,1,0)
number[0];
numero.push(6);
number.pop();
numero.shift(-1);
number.unshift();
number.reverse();
number.sort();
number.sort(function(x,y){return y-x;});
*/
/* TEMPLATES LITERALS o String Template

const producto1 = 'platano',
precio1 = 10,
producto2 = 'frutilla',
precio2 = 20;

let html;

html = '<ul>'+
       '<li>Orden: ' + producto1 + '</li>' +
       '<li>Orden: ' + precio1 + '</li>' +
       '<li>Orden: ' + producto2 + '</li>' +
       '<li>Orden: ' + precio2 + '</li>' +
       '</ul>';

html =   `
            <ul>
                <li>Orden1: ${producto1} </li>
                <li>Orden1: ${precio1} </li>
                <li>Orden2: ${producto2} </li>
                <li>Orden2: ${precio2} </li>
                <li>total: ${total(precio1,precio2)} </li>
            </ul>
        `;

        function total (precio1,precio2)  {
            return precio1 +precio2;
        }

document.getElementById('app').innerHTML = html;
       */
/* CONVETIR VALORES

--> Numero a string = '20'
--> String a numero = Number('20') / parseInt('20') y entero / parseFloar('20.02') y decimal


OPERADORES

comparación 

--> emiten una respuesta booleana
--> x+=y --> x=x+y
--> != --> distinto
--> == === --> igual valor / igual valor y tipo

VARIABLES

Difference between var, let, const -->var declarations are globally scoped or function scoped while let and const are block scoped.

var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

Tipos de variables:

let valor;
valor = 'juan'; (string)
valor = 20; (number)
valor = undefined; (no tiene valor)
valor = null;
valor = Symbol('symbol')
valor = [1,2,3,4] (arreglo, array)
varlo = {
    nombre:'juan',
    profesion:'desarrollador-web'
}

document.getElementById('app').innerHTML = 'Hola Mundo'; -> (script)
let nombre = prompt('cual es tu nombre?') -> (script)
let edad = prompt('cual es tu edad?') = `Bienvenido $(nombre) de $(edad) años`; -> (script)*/