export function orderCard(item){

    const div = document.createElement("div");
    div.innerHTML = 
    `
    <div class="border rounded p-2 mb-2 d-flex justify-content-between align-items-center">
    <div>
        <h6 class="mb-1">${item.nombre}</h6>
        <small class="text-muted">$${item.precio}</small>
    </div>

    <div class="d-flex align-items-center gap-1">
        <button class="btn btn-sm btn-outline-secondary">−</button>
        <span class="fw-semibold">1</span>
        <button class="btn btn-sm btn-outline-secondary">+</button>
        <button class="btn btn-sm btn-outline-danger ms-1">🗑</button>
    </div>
    </div>

    
    `
    return div
}