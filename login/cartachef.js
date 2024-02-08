cartaoriginal = document.getElementById('cartaor');

cardchefs = localStorage.getItem('cardchef');


function loadorigincardschef(cardchef) {
    fetch(`http://localhost:3000/chefs/${cardchef}`)
    .then(result => result.json())
    .then(data => {
        let l = '';
        if (data) {
            l += ` <img src="${data.url}" alt="" />
            <h2 class="card-title">${data.nombre}</h2>
            <img class="stars" src="../src/img/5estrellas.png" alt="" />
            <h5>Número de reviews</h5>
            <h3> Especialidad: ${data.especialidad}</h3>
            <p>
            ${data.descripcion}
            </p>`;
            
            cartaoriginal.innerHTML = l;
        }
        });
    
}

function searcher() {
    let r = document.getElementById('searchchef').value;
    console.log(r);
    spacesearch = document.getElementById("spacesearch");
  
    fetch("http://localhost:3000/chefs")
  
      .then(result => result.json())
      .then(data => {
        var filtro = data.filter(element => {
          return element.nombre.includes(r);
        });
  
        if (r.length > 0) {
          let s = '';
          filtro.forEach(cardchef => {
            s += `<a href="../HTML/chef2.html?id=${cardchef.id}">
                    <button onclick="localStorage.setItem('plato', '${cardchef.id}');" type="button" class="btn btn-link">${plato.Nombre}</button>
                  </a>`;
          });
          spacesearch.innerHTML = s;
        } else if (r.length <= 0) {
          spacesearch.innerHTML = '';
        }
      });
  }
loadorigincardschef(cardchefs);
