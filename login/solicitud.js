function solicitudes() {

    let carrusel = document.getElementById('content-carrusel');
    q = '';
    console.log(carrusel);
    fetch("http://localhost:3000/platos")
        .then(result => result.json())
        .then(data => {
            data.forEach((element,idx) => {
                let item = document.createElement('div')
                if(idx < 1){
                    item.classList.add("carousel-item", "active");
                    
                }else{
                    item.classList.add("carousel-item");

                }
                console.log(element);          
                item.innerHTML = `<div class="row d-flex justify-content-center">
                <div class="col-md-8 mb-3 card-group carta">
                    <div class="card d-flex justify-content-center">
                        <img class="carousel-image" alt="100%x280" src="${element.url}">
                        <div class="card-body p-5">
                            <h4 class="card-title">${element.Nombre}</h4>
                            <p class="card-text">${element.Descripcion}</p>
                            <div class="row mt-5">
                                <div class="col-3 iconos">
                                    <img src="../src/img/dollar.png" class="w-25 icono" alt="">
                                    <p class="iconosTexto">200.000</p>
                                </div>
                                <div class="col-3 iconos">
                                    <img src="../src/img/mapa.png" class="w-25 icono" alt="">
                                    <p class="iconosTexto">Cl. 16 #55-129</p>
                                </div>
                                <div class="col-3 iconos">
                                    <img src="../src/img/phone.png" class="w-25 icono" alt="">
                                    <p class="iconosTexto">301 732 5327</p>
                                </div>
                                <div class="col-3 iconos">
                                    <img src="../src/img/time.png" class="w-25 icono" alt="">
                                    <p class="iconosTexto">2pm - 4pm</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-evenly mb-5 gap-5">
                                <button type="button" class="btn py-3 px-4" id="btn8">Rechazar solicitud</button>
                                <button type="button" class="btn py-3 px-4" id="btn9">Aceptar solicitud</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
                carrusel.appendChild(item);
            });

        })
}
function welcome() {
    
 bienvenido = localStorage.getItem('chefname');
 h2=document.getElementById('Bienvenidos');
 q ='';
    fetch("http://localhost:3000/chefs")
    .then(r=>r.json())
    .then(d=>{
        console.log(d);
        q+=`Bienvenido ${d.nombre}`
    })
}


// function cambio() {
//     let pagination = document.getElementById('pagination');
//     let plus = 1
//     let menus = 3
//     while (plus > menus) {

//     }
// }

solicitudes();
welcome();