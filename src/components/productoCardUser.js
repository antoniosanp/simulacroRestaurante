
export function productoCardUser(producto) {

    const div = document.createElement("div");
    div.className = "col-12 col-sm-6 col-lg-4";
    div.dataset.id = producto.id

    div.innerHTML = `
        <div class="border rounded p-3 text-center h-100">
            <div class="bg-light mb-2" style="height:120px;"></div>
            <h5 class="mb-1">${producto.nombre}</h5>
            <h6 class="mb-1">${producto.categoria}</h6>
            <small class="text-muted">$${producto.precio}</small>
            <br>
            <button type="button" class="btn btn-success">Comprar</button>
        </div>
    `;
    console.log(div.dataset.id)
    return div;
}
