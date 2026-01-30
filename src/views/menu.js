export function menuView() {

    const section = document.createElement("section");
    section.className = "container-fluid mt-4";

    section.innerHTML = `
        <!-- TÍTULO -->
        <h1 class="text-center mb-4 fw-bold">Mi restaurante</h1>

        <!-- FILTROS -->
        <div class="d-flex justify-content-center gap-3 mb-4">
            <button class="btn btn-outline-primary">Todo</button>
            <button class="btn btn-outline-primary">Hamburguesa</button>
            <button class="btn btn-outline-primary">Bebidas</button>
            <button class="btn btn-outline-primary">Postres</button>
        </div>

        <!-- CONTENIDO PRINCIPAL -->
        <div class="row">
            
            <!-- SIDEBAR -->
            <aside class="col-12 col-md-3 mb-3">
                <div class="border rounded p-3 h-100">
                    <h5 class="fw-semibold mb-3">Sidebar</h5>
                    <p class="text-muted mb-0">
                        Aquí irán filtros adicionales, categorías, precios, etc.
                    </p>
                </div>
            </aside>

            <!-- GRID DE PRODUCTOS -->
            <main class="col-12 col-md-9">
                <div class="border rounded p-3">
                    
                    <div class="row g-3">
                        
                        <!-- PRODUCTO PLACEHOLDER -->
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="border rounded p-3 text-center h-100">
                                <div class="bg-light mb-2" style="height:120px;"></div>
                                <h6 class="mb-1">Producto</h6>
                                <small class="text-muted">$0.00</small>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="border rounded p-3 text-center h-100">
                                <div class="bg-light mb-2" style="height:120px;"></div>
                                <h6 class="mb-1">Producto</h6>
                                <small class="text-muted">$0.00</small>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="border rounded p-3 text-center h-100">
                                <div class="bg-light mb-2" style="height:120px;"></div>
                                <h6 class="mb-1">Producto</h6>
                                <small class="text-muted">$0.00</small>
                            </div>
                        </div>

                    </div>

                </div>
            </main>

        </div>
    `;

    return section;
}
