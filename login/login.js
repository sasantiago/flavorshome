// const btnLogin = document.getElementById("idLogin");

// let estudiantes = [
//     {nombre: "Jhon", correo: "Doe", contraseña: "123", genero :"Masculino"},
//     {nombre: "Maria", correo: "Mar", contraseña: "1234", genero: "Femenino"},
//     ]

// function validarDatos() {
//     let email = document.getElementById("idEmail");
//     let password = document.getElementById("idPassword");

//     if(email.value != ""){
//         //email.classList.add("is-valid");
//         email.classList.remove("is-invalid");
//     }else{
//         email.classList.add("is-invalid");
//         //email.classList.remove("is-valid");
//     }

//     if(password.value != ""){
//         //password.classList.add("is-valid");
//         password.classList.remove("is-invalid");
//     }else{
//         password.classList.add("is-invalid");
//         //password.classList.remove("is-valid");
//     }

//     estudiantes.forEach(estudiante => {
//         if(email.value == estudiante.correo && password.value == estudiante.contraseña){
//             sessionStorage.setItem("nombre", estudiante.nombre);
//             sessionStorage.setItem("genero", estudiante.genero);
//             location.href = "./home.html";
//         }/* else if (email.value == estudiante.correo && password.value != estudiante.contraseña) {
//         document.getElementById("idError").innerHTML = "La contraseña no es válida"//solo prueba
//         } */else if(email.value != estudiante.correo && password.value != estudiante.contraseña){
//             document.getElementById("idError").innerHTML = "El correo y/o la contraseña son válidas"
//         }/* else if (email.value != estudiante.correo && password.value == estudiante.contraseña){
//             document.getElementById("idError").innerHTML = "Correo no válido" //solo de prueba
//         } */
//     });
// }
function autenticarUsuario() {
  let email = document.getElementById("idEmail").value;
  let password = document.getElementById("idPassword").value;
  console.log(email, password);

  fetch("http://localhost:3000/usuarios")
    .then((r) => r.json())
    .then((data) => {
      filtro = data.filter(function (d) {
        return d.email == email;
      });

      if (filtro.length > 0) {
        if (filtro[0].password == password) {
          location.href = "../HTML/index.html";
          localStorage.setItem("autenticado","si");
        } else {
          alert("Correo o contraseña incorrectos");
        } 
      }
      console.log(filtro);
    });
}

  function search() {
    const q = document.getElementById('searchBanner').value;
    console.log(q);
    
    fetch("http://localhost:3000/platos")
        .then(result => result.json())
        .then(data => {
           var filtro =  data.filter(element => {
           return element.Nombre.includes (q)
          });
            console.log(filtro);
            });
        
  
}
function deletes(id){
  console.log(id);
  fetch(`"http://localhost:3000/platos"/${id}`,{
      method: 'DELETE',
      headers: {
          "Content-Type":"application/json"
      }
  })
  .then(data => {return data.json})
  .then(resut=>{
          alert("El usuario ha sido eliminado");
          console.log(resut)
      }
  )
  .catch(error =>{
      console.error("error at:", error);
  }); 
};


