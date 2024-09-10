document.addEventListener("DOMContentLoaded", function(){

    //Imprime un mensaje de Bienvenida en la consola//
    console.log("Sistema EBAC de Registro de Alumnos");
    
    var form = document.getElementById("registration-form");
    var addButton = document.getElementById("add-button");
    var consultButton = document.getElementById("consult-button");
    var deleteButton = document.getElementById("delete-button");
    
    form.addEventListener("submit",agregarAlumno);
    
    form.style.display="none";
    
    addButton.addEventListener("click",function(event){
    form.style.display ="flex";
    })
    
    consultButton.addEventListener("click", consultarRegistros);
    
    deleteButton.addEventListener("click", eliminarAlumno);
    
    //Se define un arreglo de registro con datos de alumnos de EBAC//
    var registro = [
      //Se muestra lista de alumnos por medio de objetos//
        {nombre: "Salvador Mora", edad: "30",zonaResidencia: "CDMX",nombrePrograma: "Desarrollador Front End de Cero a Pro", email: "salvadormora@ebac.mx",telefono: "+52 55 9225 2629", seguroSocial:true},
        {nombre: "Maria Hubert", edad: "34",zonaResidencia: "EDO Mex",nombrePrograma: "Desarrollo Back End con Python", email: "maria@ebac.mx", telefono: "+52 55 9225 2629", seguroSocial: false}
    ];
    //Función que permite agregar un nuevo alumno al arreglo de registro//
    function agregarAlumno(event){
    
    event.preventDefault();
    
      //Se le solicita información al usuario para el registro de un nuevo alumno//
        var nombre = document.getElementById("name-input").value;
        var zonaResidencia = document.getElementById("locality-input").value;
        var edad = document.getElementById("age-input").value;
        var nombrePrograma = document.getElementById("course-input").value;
        var email =document.getElementById("email-input").value;
        var telefono = document.getElementById("telephone-input").value;
        var seguroSocial = document.getElementById("ssn-input").value;
        var SgSocialProcesado;
        if (seguroSocial === "Si"){
            SgSocialProcesado = true;
        } else {
          SgSocialProcesado = false;
           
    
        }
    
    //Crea un objeto que se llama nuevoAlumno con los datos ingresados//
        var nuevoAlumno = {nombre : nombre , edad: edad, zonaResidencia: zonaResidencia,  nombrePrograma: nombrePrograma, email: email, telefono: telefono, seguroSocial: SgSocialProcesado }
    //Agrega la información de nuevoAlumno al arreglo//
        registro.push(nuevoAlumno);
        var nombre = document.getElementById("name-input").value = "";
        var zonaResidencia = document.getElementById("locality-input").value = "";
        var edad = document.getElementById("age-input").value = "";
        var nombrePrograma = document.getElementById("course-input").value = "";
        var email =document.getElementById("email-input").value = "";
        var telefono = document.getElementById("telephone-input").value = "";
        var seguroSocial = document.getElementById("ssn-input").value = "";
    }
    
    
    
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
    
    
    
    
    

    })
    
    
    
    
    
    
    
    
    
    