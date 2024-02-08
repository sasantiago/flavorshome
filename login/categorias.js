categorias = document.getElementById('categorias');
cartas = document.getElementById('cartas')
q = '';
pcartas = '';

fetch("http://localhost:3000/platos")
.then(result=> result.json())
.then(data =>{
    data.forEach(element => {
    
        q += ` <div class="col-md-3 d-flex justify-content-center">
        <div>
          <img class='w-100' src="${element.url}" id="images">
          <h4 class="text-center mt-1 classAboutDos">${element.categoria}</h4>
        </div>
      </div>`
    });
        
    categorias.innerHTML = q;
});







fetch("http://localhost:3000/platos")
.then(result=> result.json())
.then(data =>{
    data.forEach(element => {
    
        pcartas+= ` <div class="col-md-11">
        <div class="card card-rounded shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex flex-row p-5">
            <img src="${element.url}" id="imgGeneral" class="card-img-top w-50"
              alt="Card 1 image" />
            <div class="d-flex flex-column mx-5">
              <h5 class="cardTitle">${element.Nombre}</h5>
              <p class="card-text">
              ${element.Descripcion}
              </p>
              <a href="chef2.html?id=${element.id}" class="btn d-flex justify-content-center" onclick="localStorage.setItem('plato', '${element.id}');" id="btn6">Ver receta</a>
            </div>
          </div>
        </div>
      </div>`
    });
        
    cartas.innerHTML = pcartas;
});

function searchCategory() {
    let searcher = document.getElementById('inputSearch').value;
    console.log(searcher);
    spacesearch = document.getElementById("spacesearch");

    fetch("http://localhost:3000/platos")
        
        .then(result => result.json())
        .then(data => {
            var filtro = data.filter(element => {
                return element.Nombre.includes(searcher);
            })
            console.log(filtro);

            if (searcher.length > 0) {
                let s = '';
                filtro.forEach(plato => {
                    s += `<a href="../HTML/chef2.html?id=${plato.id}">
                            <button onclick="localStorage.setItem('plato', '${plato.id}');" type="button" class="btn btn-link">${plato.Nombre}</button>
                          </a>`;
                });
                spacesearch.innerHTML = s;
            } else if (searcher.length <= 0) {
                spacesearch.innerHTML = '';
            }
        
    });
}

