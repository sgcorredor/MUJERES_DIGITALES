var valor1 = 0;
var valor2 = 0;
var nommbre = "Silvia"
var apellido = "Corredor"

var multiplicar = function(){
  console.log(valor1*valor2)
 }
  
 var sumar = function(){
   console.log(valor1+valor2)
 }

 var restar = function(){
   console.log(valor1-valor2)
 }

 var dividir = function(){
   console.log(valor1/valor2)
 }

 var nombrecompleto = function(){
   console.log(nommbre+" "+apellido)
 }

 var obtener = function(){
   console.log("Obteniendo datos") 
   var a = document.getElementById("prueba1").value
   var b = document.getElementById("prueba2").value
   valor1 = parseInt(a);
   valor2 = parseInt(b);

 }
 for (var index = 0; index <= 20; index++) {
   console.log ("5" + "X" + index + "=" + (5 * index))
 }

 /*for(var pedro = 0; pedro = 5; pedro++){
   console.log(pedro)
 }*/
 
 // IF ES UN CONDICIONAL 
 
 if(4<5 && 3>5 && 4<6 && 8==8){ //&& = condicion "Y"
   console.log("si se cumple la condicion")
 }else{
   console.log("no se cumple la condicion")
 }

 if(1==2 || 4==4 || 3!=7) { //|| = condicion "O"
   console.log("si se cumple la condicion")
 }else{
   console.log("no se cumple la condicion")
 }

 if(true != false) { //Diferencia
   console.log("si se cumple la condicion")
 }else{
   console.log("no se cumple la condicion")
 }

 if(true == false) { //Igualdad
   console.log("si se cumple la condicion")
 }else{
   console.log("no se cumple la condicion")
 }

 if("Silvia" == "silvia") { 
   console.log("si se cumple la condicion")
 }else{
   console.log("no se cumple la condicion")
 }

 if(5 == "5") { 
   console.log("si se cumple la condicion")
 }else{
   console.log("no se cumple la condicion")
 }

 if(true) { 
   console.log("si se cumple la condicion")
 }
 else{
   console.log("no se cumple la condicion")
 }
 
 //WHILW

 /*var datos1 = 100
 while (datos1 < 120) {
   console.log("Imprimir")
   datos1 == 50000;
 }*/

 var datos1 = 100
 while (datos1 < 120) {
   console.log("Imprimir")
   datos1 = datos1 + 1;
 }

 var nombre = ' '
 while (nombre == ' ') {
   console.log("Imprimir")
   nombre = 'Silvia';
 }

 var booestado = true
 while (booestado) {
   console.log("Imprimir")
   booestado = false;
 }    

 var booestado = true;
 var contador = 0;
 while (booestado) {
   contador = contador + 1
   console.log("Imprimir")
   if (contador == 10) {
     booestado = false;
   }
 }
 
 //SWITCH - Heranito de IF

 /*var dato = 100
 switch (dato) {
   case 100:
     console.log("el valor es 100")
     break;
   case 200:
     console.log("el valor es 200")
     break;
   case 300:
     console.log("el valor es 300")
     break;
   default:
     console.log("ninguno")
     break;
 } */   

 /*var dato = 100
 var analizar = function(){
   switch (dato) {
   case 100:
     console.log("el valor es 100")
     break;
   case 200:
     console.log("el valor es 200")
     break;
   case 300:
     console.log("el valor es 300")
     break;
   default:
     console.log("ninguno")
     break;
   }
 dato = dato + 100
 }*/
 
 var dato = 100
 var analizar = function(){
   if (dato == 100){
     console.log("el valor es 100");
   }
   if (dato == 200){
     console.log("el valor es 200");
   }  
   if (dato == 300){
     console.log("el valor es 300");
   }
   if (dato != 100 && dato != 200 && dato != 300) {
     console.log("ninguno")
   }
 dato = dato + 100
 }

 console.log(document.getElementById("prueba1").value)

 //ARRAYS

 /*var registro20 = {nombre: "silvia", apellido: "corredor", edad: 40}
 var registro21 = {nombre: "marcela", apellido: "prieto", edad: 35}
 var registro22 = {nombre: "laura", apellido: "martinez", edad: 8}

 //var listadedatos = ["jhon","juan","pedro","lucas"];

 var listadedatos = [registro20, registro21, registro22];
 console.log(listadedatos[1].apellido)*/

 /*var listadedatos = [];
 listadedatos.push("silvia") //PUSH: Epuja o sube datos a un array o lita de datos
 listadedatos.push("marcela")
 listadedatos.push("viviana")
 console.log(listadedatos)*/

  /* VARIAS FORMAS DE CREAR UNA FUNCION 

    var agregrinformacion = function() {

    }


    function agregrinformacion() {

    }


    var agregrinformacion = () => {

    }

    */
    /*
    var listadedatos = [];
    var agregrinformacion = function() {
        var nombre = document.getElementById("minombre").value
        listadedatos.push(nombre)
    }
    */
    /*
        var agregrinformacion = function() {
        var nombre = document.getElementsByClassName("pruebax")[1].value
        console.log(listadedatos)
        listadedatos.push(nombre)
        console.log(listadedatos)
    }
    
    var listadedatos = [];
    var agregrinformacion = function() {
        var nombre = document.getElementsByName("xx").value
        listadedatos.push(nombre)
        console.log(listadedatos)
    }
    
    var contenedor = document.getElementById('contenedordedatos')
    contenedor.innerHTML = "<h1 onclick'agregarinformacion()'> Hola mundo </h1>"

    var listadedatos = [];
    var agregrinformacion = function() {
        var nombre = document.getElementsByName("xx").value
        listadedatos.push(nombre)
        console.log(listadedatos)
    }
    */
    
    var contenedor = document.getElementById('contenedordedatos')
    var listadedatos = [];
    var agregrinformacion = function() {
        var nombre = document.getElementsByName("xx").value
        listadedatos.push(nombre)

        for(var a = 0; a < listadedatos.length; a++){
          contenedor.innerHTML = contenedor.innerHTML + listadedatos[a]
        }
             
    }