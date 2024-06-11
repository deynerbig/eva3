import {} from "./promesas.js"
window.addEventListener("load",()=>{
    document.getElementById("btnregistrar").addEventListener("click",registrar)
})
const registrar=()=>{
    let enombre=document.getElementById("nombre");
     
    let vnombre=enombre.value;

    let objeto={
        nombre:vnombre
    }
    
}