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
loadorigincardschef(cardchefs);
