cardschef = document.getElementById('cardschef');
cardschef2 = document.getElementById('cardschef2');
cardchefs = localStorage.getItem('cardchef');
function loadcardschef() {
    fetch('http://localhost:3000/chefs/')
        .then(result => result.json())
        .then(data => {
            data = data.slice(0, 3);

            let template = ''; 
            data.forEach(element => {
                template += `
                    <div class="col-md-4">
                        <div class="card d-flex justify-content-center">
                            <img class="carousel-image" alt="100%x280" src="${element.url}">
                            <div class="card-body">
                                <h4 class="card-title">${element.nombre}</h4>
                                <img class="stars" src="../src/img/5estrellas.png" alt="">
                                <p class="card-text">${element.descripcion}</p>
                            </div>
                            <a href="../HTML/5.html?id=${element.id}" class="btn d-flex justify-content-center" onclick="localStorage.setItem('cardchef', '${element.id}')">ver detalles</a>
                        </div>
                    </div>`;
            });
            cardschef.innerHTML = template; 
            cardschef2.innerHTML = template; 
        });
}

// Llamar a la función para cargar las cartas de los chefs;

loadcardschef();
