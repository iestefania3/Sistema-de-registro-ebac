//Imprime un mensaje de Bienvenida en la consola//
console.log("Sistema EBAC de Registro de Alumnos");

//Se define un arreglo de registro con datos de alumnos de EBAC//
var registro = [
  //Se muestra lista de alumnos por medio de objetos//
    {nombre: "Salvador Mora", edad: "30",zonaResidencia: "CDMX",nombrePrograma: "Desarrollador Front End de Cero a Pro", email: "salvadormora@ebac.mx",telefono: "+52 55 9225 2629", seguroSocial:true},
    {nombre: "Maria Hubert", edad: "34",zonaResidencia: "EDO Mex",nombrePrograma: "Desarrollo Back End con Python", email: "maria@ebac.mx", telefono: "+52 55 9225 2629", seguroSocial: false}
];
//Función que permite agregar un nuevo alumno al arreglo de registro//
function agregarAlumno(){
  //Se le solicita información al usuario para el registro de un nuevo alumno//
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresar edad");
    var nombrePrograma = prompt("Programa a estudiar");
    var email = prompt("Ingresa correo electrónico");
    var telefono = prompt("Ingresa número de teléfono");
    var seguroSocial = prompt("Ingresa Seguro Social:\n1-.Si \n2-.No");
    var SgSocialProcesado = prompt ("Seguro social correcto: \n S \n N" );
    if (seguroSocial === "Si"){
        SgSocialProcesado == True;
    } else {
      SgSocialProcesado == False;
       

    }

//Crea un objeto que se llama nuevoAlumno con los datos ingresados//
    var nuevoAlumno = {nombre : nombre , edad: edad, zonaResidencia: zonaResidencia,  nombrePrograma: nombrePrograma, email: email, telefono: telefono }
//Agrega la información de nuevoAlumno al arreglo//
    registro.push(nuevoAlumno);
}
//Esto es una linea de comentario//
/*function incluirAlumno(){
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresar edad");
    var nombrePrograma = prompt("Programa a estudiar");
    var email = prompt("Ingresa correo electrónico");
    var telefono = prompt("Ingresa número de teléfono");
    var seguroSocial = prompt("Ingresa Seguro Social:\n1-.Si \n2-.No");
    if (seguroSocial === "True"){
        alert("Ok");
    } else if (seguroSocial === "False"){
      alert("Ok");   
}
    var incluirAlumno = {nombre : nombre, edad: edad, zonaResidencia: zonaResidencia,  nombrePrograma: nombrePrograma, email: email, telefono: telefono}
    registro.push(incluirAlumno);
}
function consultarAlumnos(){
  for(consultar = 0; registro.length; i ++){
   console.log("Nombre: " + registro[i].nombre);
   console.log("Edad: " + registro[i].edad);
   console.log("Zona de residencia: " + registro[i].zonaResidencia);
   console.log("Nombre del Programa: " + registro[i].nombrePrograma);
   console.log("email: " + registro[i].email);
   console.log("Teléfono: " + registro[i].telefono);
  }
}*/


//Función para consultar los registros de los alumnos//
function consultarRegistros(){
//Este ciclo for repite sobre cada uno  de los registros del arreglo//
 for(var i = 0; i < registro.length; i ++){
//Esta lista de console.log permite al usuario el registro en la consola//
    console.log("Nombre: " + registro[i].nombre);
    console.log("Edad: " + registro[i].edad);
    console.log("Zona de residencia: " + registro[i].zonaResidencia);
    console.log("Nombre del Programa: " + registro[i].nombrePrograma);
    console.log("email: " + registro[i].email);
    console.log("Teléfono: " + registro[i].telefono);
    console.log("Seguro Social: " + registro[i].seguroSocial);
    //consola.log("Hola Mundo" + registro[i].email);//
 };  

}

//Esta función permite al usuario eliminar alumnos en la consola/permite generar un nuevo arreglo que no contenga la información del alumno deseado//
function eliminarAlumno(){
//Solicita al usuario el nombre del alumno a eliminar//  
  var nomAeliminar = prompt("Ingresa nombre del alumno para eliminar");
//Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar  
  registro = registro.filter(alumno => alumno.nombre !== nomAeliminar);
}

//Esta función permite al usuario modificar al alumno//
function editarAlumno(){
  
  //Solicita al usuario el nombre del alumno a editar//
   var editAlumno = prompt("Ingresa nombre del alumno a editar");
   //Este ciclo for repite sobre cada uno  de los registros del arreglo//
   for(var i = 0; i < registro.length; i ++){ 
      if (editAlumno === registro[i].nombre){  

         var editDato = prompt("Seleccione opción a editar: \n1. Nombre \n2. Edad \n3. Zona Residencia \n4. Nombre del Programa \n5. Email \n6. Telefono \n7. Seguro Social");
         var nuevoDato = prompt("Ingresa el nuevo dato a editar");
   
  
         if (editDato === "1"){ 
           registro[i].nombre = nuevoDato;
         } else if(editDato === "2"){
           registro[i].edad = nuevoDato;
         } else if(editDato === "3"){
           registro[i].zonaResidencia = nuevoDato; 
         } else if(editDato === "4"){
            registro[i].nombrePrograma = nuevoDato;
         } else if(editDato === "5"){
            registro[i].email = nuevoDato;
         } else if(editDato === "6"){
            registro[i].telefono = nuevoDato;
         } else if(editDato === "7"){
            if (nuevoDato === "Si"){
            registro[i].seguroSocial == true;  
            } else{
            registro[i].seguroSocial == false;
            }
         }
      }
   }
}
/*Agrega la información del alumno editado al arreglo*/  
//editAlumno.registro != editAlumno;//

// if (editAlumno === registro [i].nombre);{


 
 
//Esta lista de console.log permite al usuario el registro en la consola//
    /*console.log("Cambio de nombre correcto" + registro[i].nombre);
    console.log("Cambio de edad correcto" + registro[i].edad);
    console.log("Cambio de zona correcto" + registro[i].zonaResidencia);
    console.log("Cambio de programa correcto" + registro[i].nombrePrograma);
    console.log("Cambio de email correcto" + registro[i].email);
    console.log("Cambio de telefono correcto" + registro[i].telefono);
}*/




//Este ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición//
do{
//Esta variable toma la elección del usuario para ejecutar la función indicada   
  var opcion = prompt("seleccione una opcion: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Editar datos \n4. Eliminar registro \n5. Salir ");

//Se declara este if para dar a elegir una opción que el usuario desee//
  if (opcion === "1"){
    agregarAlumno();
   } else if(opcion === "2"){
    consultarRegistros();
   } else if(opcion === "3"){
    editarAlumno();
   } else if (opcion === "4"){
    eliminarAlumno();
   } else if ("Salir"){
    alert("Salir del sistema");
     } else {
       alert("Opción inválida, elije otra");
       }
//Esta variable nos permite elegir otra acción o cerrar el ciclo//
var continuar = prompt("¿Deseas hacer otra operación? (S/N)");
//While que se encarga de cerrar el ciclo//
} while (continuar ==="s");











