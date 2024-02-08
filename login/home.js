var template = "";

    root = document.getElementById('root');
    

    fetch("http://localhost:3000/platos").then(r => r.json()).then(d => {

            d.forEach(element => {

                template += `
                <div class="col-md-3">  
            <div class="card h-100" style="width: 18rem">
              <img src="${element.url}" class="card-img-top" id="img4" alt="platillo" />
              <div class="card-body">
                <h5 class="cardTitle text-center" id="nameid4">${element.Nombre}</h5>
                <p class="card-text" id="descripcionid4">
                  <p>${element.Descripcion}</p>
                </p>
              </div>
              <button onclick="localStorage.setItem('plato', ${element.id});
              location.href = 'chef2.html'"  class="btn btn-primary d-flex justify-content-center" id="btn">Ver receta</button>
            </div>
          </div>`;

            });

            root.innerHTML = template;
        });

        function search() {
            let q = document.getElementById('searchBanner').value;
            console.log(q);
            spacesearch = document.getElementById("spacesearch");
        
            fetch("http://localhost:3000/platos")
                .then(result => result.json())
                .then(data => {
                    var filtro = data.filter(element => {
                        return element.Nombre.includes(q);
                    });
        
                    if (q.length > 0) {
                        let s = '';
                        filtro.forEach(plato => {
                            s += `<button type="button" class="btn btn-link">${plato.Nombre}</button>`;
                        });
                        spacesearch.innerHTML = s;
                        q = ''; 
                    }else if (q.length<=0) {
                        spacesearch.innerHTML = '';
                    }{

                    }
                });
        }
        
        