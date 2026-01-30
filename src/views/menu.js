import { store } from "../store/store.js";
import { productoCardAdmin } from "../components/productoCardAdmin.js";
import { productoCardUser } from "../components/productoCardUser.js";

export function menuView() {

    const section = document.createElement("section");
    section.className = "container-fluid mt-4";

    if (!store.current_user) {
        location.hash = "#/login";
        return null;
    }
    if (store.current_user.rol === "admin"){
        
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
            

            <!-- GRID DE PRODUCTOS -->
            <main class="col-12 col-md-9">
                <div class="border rounded p-3">
                    
                    <div  id = "grid" class="row g-3 ">
                        
                        <!-- PRODUCTO PLACEHOLDER -->
                    

                    </div>

                </div>
            </main>

        </div>
    `;
    const grid = section.querySelector("#grid");
    renderProductosAdmin(grid)
    return section;
}

    if (store.current_user.rol === "visitante"){


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
                    
                    <div  id = "grid" class="row g-3 ">
                        
                        <!-- PRODUCTO PLACEHOLDER -->
                    

                    </div>

                </div>
            </main>

        </div>
    `;
    const grid = section.querySelector("#grid");
    renderProductosUser(grid)
    return section;
        


    }

    }

 

function renderProductosAdmin(divisor){
    for (const p of store.productos.data){ divisor.appendChild(productoCardAdmin(p))}
    }
function renderProductosUser(divisor){
    for (const p of store.productos.data){ divisor.appendChild(productoCardUser(p))}
    }