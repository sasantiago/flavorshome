var template = "";
var cocinero = "";
chefs1 = document.getElementById('chefs1');
root = document.getElementById('root');
platox = localStorage.getItem('plato');
cardchef =localStorage.getItem('cardchef');

function loadDishes() {
  fetch(`http://localhost:3000/platos/`).then(r => r.json()).then(d => {

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

      root.innerHTML = template;
    });

  });

}


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
          s += `<a href="../HTML/chef2.html?id=${plato.id}">
                  <button onclick="localStorage.setItem('plato', '${plato.id}');" type="button" class="btn btn-link">${plato.Nombre}</button>
                </a>`;
        });
        spacesearch.innerHTML = s;
      } else if (q.length <= 0) {
        spacesearch.innerHTML = '';
      }
    });
}

// platox = localStorage.getItem('plato');

function loadchef() {
  fetch(`http://localhost:3000/chefs/`).then(r => r.json()).then(d => {

    d.forEach(data => {
      cocinero += `
   <div class="col-md-3">
     <a href="5.1.html?"  onclick="localStorage.setItem('cardchef', '${data.id}');">
       <div class="card h-100" id="cardChef" style="width: 18rem">
         <img src="${data.url}" class="card-img-cocinero" alt="platillo" />
       </a>
       <div class="card-body">
         <h5 class="cardTitle text-center">${data.nombre}</h5>
         <p class="card-text">${data.descripcion}</p>
       </div>
       <div class="d-flex justify-content-center">
         <img src="../src/img/stars.png" class="w-75" alt="Small Image" />
       </div>
     </div>
   </div>
`;


      chefs1.innerHTML = cocinero;
    });

  });

}



{/* <div class="col-md-3">
<a href="5.1.html">
<div class="card h-100" id="cardChef" style="width: 18rem">
  <img src="../Flavors/../src/img/cocinero.png" class="card-img-cocinero" alt="platillo" />
</a>
  <div class="card-body">
    <h5 class="cardTitle text-center">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet</p>
  </div>
  <div class="d-flex justify-content-center">
    <img src="../src/img/stars.png" class="w-75" alt="Small Image" />
  </div>
</div> */}


loadDishes();
loadchef();

