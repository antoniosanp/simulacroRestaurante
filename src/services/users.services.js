import { httpGet, httpPost, httpPut, httpPatch, httpDelete } from "./http.js";
import { store } from "../store/store.js";

export async function getUsers(){
    store.users.data  = await httpGet(store.users.endpoint);
    return store.users.data
}

export async function postUsers(user) {
    await httpPost(store.users.endpoint, user);
    return await getUsers()
}