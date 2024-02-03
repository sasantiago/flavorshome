var template = "";

root = document.getElementById('root');
plato=localStorage.getItem('plato');

fetch(`http://localhost:3000/platos/${plato}`).then(r => r.json()).then(element => {



    template += `
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
</div>`;


root.innerHTML = template;
});