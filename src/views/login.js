import { store } from "../store/store.js";
import { validarLogin } from "../store/auth.js";
import { iniciarSesion } from "../store/auth.js";

export function loginView(){
    const loginDiv = document.createElement("div");
    loginDiv.innerHTML = 
    `
    
    <form id="loginForm" action="">
        <input type="text" name="email" id="email" placeholder="admin@gmail.com">
        <input type="password" name="password" id="password" placeholder="*****">
        <button type="submit">iniciar sesion</button>
        <a href="#/register"> registro</a>
    </form>
    

    `

    const form = loginDiv.querySelector("#loginForm");
    const email = loginDiv.querySelector("#email");
    const password = loginDiv.querySelector("#password");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(store)
        if (validarLogin(email.value, password.value)){
            console.log("usuario válido");
            const user = store.users.data.find( u => u.email === email.value);
            iniciarSesion(user);
        }

        else {
            console.log("careverga")
        }

        

    })

    return loginDiv
}

