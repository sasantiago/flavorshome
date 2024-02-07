async function obtenerDetallesPlato(plato) {
    try {
        const response = await fetch(`http://localhost:3000/platos/${plato}`);
        if (!response.ok) {
            throw new Error('Error al obtener detalles del plato.');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

function renderizarDetallesPlato(element) {
    if (element) {
        const root = document.getElementById('root');
        const template = `
        <center><h2>${element.Nombre}</h2></center>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <img src="${element.url}" alt="${element.Nombre}">
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <b>Ingredientes</b>
                    <ul>
                        ${element.Ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <center>
                <h1>Preparacion</h1>
            </center>
            <p>${element.preparacion}</p>

            <div class="d-flex justify-content-center mb-5 gap-3">
              <a href="categorias.html">
                <button type="button" class="btn py-3 px-4" id="btnPreparacion1">
                  categorias
              </a>
              <a href="../HTML/8.html">
                <button type="button" class="btn py-3 px-4" id="btnPreparacion2">
                  Contáctanos
              </a>
              </button>
            </div>  
        </div>
        `;
        root.innerHTML = template;
    } else {
        console.error('Los detalles del plato no están disponibles.');
    }
}

const platoId = localStorage.getItem('plato');

obtenerDetallesPlato(platoId)
    .then(element => renderizarDetallesPlato(element));
