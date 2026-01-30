// export function productoCardAdmin(producto){

//     const div = document.createElement("div");
//     div.innerHTML =
    
//     `
//        <div class="col-12 col-sm-6 col-lg-4">
//             <div class="border rounded p-3 text-center h-100">
//                 <div class="bg-light mb-2" style="height:120px;"></div>
//                 <h5 class="mb-1">${producto.nombre}</h5>
//                 <h6 class="mb-1">${producto.categoria}</h6>
//                 <small class="text-muted">$${producto.precio}</small>
//             </div>
//         </div>
        
    
//     `
//     return div
// }

export function productoCardAdmin(producto) {

    const div = document.createElement("div");
    div.className = "col-12 col-sm-6 col-lg-4";

    div.innerHTML = `
        <div class="border rounded p-3 text-center h-100">
            <div class="bg-light mb-2" style="height:120px;"></div>
            <h5 class="mb-1">${producto.nombre}</h5>
            <h6 class="mb-1">${producto.categoria}</h6>
            <small class="text-muted">$${producto.precio}</small>
        </div>
    `;

    return div;
}
