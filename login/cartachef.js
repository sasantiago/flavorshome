cartaoriginal = document.getElementById('cartaor');
cardchefs = localStorage.getItem('cardchef');
function loadorigincardschef(cardchef) {
    fetch(`http://localhost:3000/chefs/${cardchef}`)
    .then(result=>result.json())
    .then(data=>{
        q='';
        data.forEach(element => {
            q+=` <img class="${element.url}" alt="" />
            <h2 class="card-title">${element.nombre}</h2>
            <img class="stars" src="../src/img/5estrellas.png" alt="" />
            <h5>Número de reviews</h5>
            <p>
            ${element.descripcion}
            </p>`
        });
        cartaoriginal.innerHTML= q;
    })
}
loadorigincardschef(cardchefs);