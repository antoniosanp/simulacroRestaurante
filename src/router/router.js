import { loginView } from "../views/login.js";
import { registerView } from "../views/register.js";
import { app } from "../../app.js";
import { cerrarSesion } from "../store/auth.js";
import { store } from "../store/store.js";
import { navbarView } from "../components/navbar.js";
import { menuView } from "../views/menu.js";

export function router(){

    //------------------------------------------------
    const hash = location.hash;
    console.log("Router called, hash:", hash);
    app.innerHTML = "";

    if (!store.current_user && hash !== "#/register") {location.hash = "#/login"}
    
    //-------------------------------

    switch (hash) {
        case "#/login":
            console.log("en login");
            if (store.current_user) {location.hash = "#/menu"; console.log("hay usuario");return}
            app.appendChild(loginView());
            
            break;
        case "#/register":
            console.log("en registro")
            app.appendChild(registerView());
            
            break;
        case "#/navbar":
            app.appendChild(navbarView())
            break;
        case "#/menu":
            console.log("en home");
            if (!store.current_user) {location.hash = "#/login"; return}
            app.append(navbarView(), menuView())
            break;

        // case "#/administrar":
        //     console.log("en administrar");
        //     app.append(navbar(), administrarView());
        //     break;

        // case "#/productos":
        //     console.log("en producto");
        //     app.append(navbar(), productosView());
        //     break;


        case "#/logout":
            console.log("cerrando sesion");
            cerrarSesion();
            location.hash = ""
            break;
            
        default:
            console.log("vista no encontrada");
            app.append(navbarView())
            break;
    }


}