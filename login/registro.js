var identidad = document.getElementById('documentId');
var nombre = document.getElementById('firstName');
var apellido = document.getElementById('lastName');
var  contraseña= document.getElementById('password');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var direcccion = document.getElementById('adress');
var rol = document.getElementById('roll');

function registrarse(){
    fetch("http://localhost:3000/usuarios",{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            id:identidad.value,
            nombres:nombre.value,
            apellidos:apellido.value,
            password:contraseña.value,
            tels:tel.value,
            email:email.value,
            direcccions:direcccion.value,
            rols:rol.value  
        })
        
    })
    .then(result=>result.json())
    .then(data=>alert("creacion exitosa",data))
    .catch(error => console.error("Error en la creación:", error));

}