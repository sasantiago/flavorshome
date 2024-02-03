
async function obtenerDetallesPlato(plato) {
    try {
        const response = await fetch(`http://localhost:3000/platos/${plato}`);
        if (!response.ok) {
            throw new Error('Error al obtener detalles del plato.');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        // Puedes manejar el error de alguna manera (por ejemplo, mostrar un mensaje al usuario)
        return null;
    }
}

// Función para renderizar detalles del plato en el HTML
function renderizarDetallesPlato(element) {
    if (element) {
        const root = document.getElementById('root');
        const template = `
            <center><h2>${element.Nombre}</h2></center>
            <div class="row">
    <div class="col-md-6">
        <div class="card">
            <img src="${element.url}" alt="">
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <b>Ingredientes</b>
            <ul>
                ${element.Ingredientes}
            </ul>
        </div>
    </div>
</div>
<div class="col-md-12">
    <center>
        <h1>Preparacion</h1>
    </center>
    <p>${element.preparacion}</p>

    <div class="col-md-2">
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-warning">Warning</button>
    </div>
</div>
        `;
        root.innerHTML = template;
    } else {
        console.error('Los detalles del plato no están disponibles.');
    }
}

// Obtener el identificador del plato desde el almacenamiento local
const platoId = localStorage.getItem('plato');

// Obtener detalles del plato y renderizar en el HTML
obtenerDetallesPlato(platoId)
    .then(element => renderizarDetallesPlato(element));
