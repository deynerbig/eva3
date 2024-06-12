import {registrartrabajador,actualizartrabajadores,mostradb,eliminartrabajador} from "./promesas.js"
window.addEventListener("load",()=>{
    document.getElementById("btnregistro").addEventListener("click",registrar)
    document.getElementById("btnactualizar").addEventListener("click",actualizar)
    document.getElementById("btncolor").addEventListener("click",colormode)
    document.getElementById("btntamaño").addEventListener("click",tamañoletra)
    mostrar()
})
const registrar=()=>{
    let tnombre=document.getElementById("nombre");
    let tapellido=document.getElementById("apellido");
    let trut=document.getElementById("rut");
    let ttelefono=document.getElementById("telefono");
    let temail=document.getElementById("email");
    //aqui se implementa queryselector que es un metodo que permite entrar al DOM y extraer los elementos en este caso yo quiero que esto me devuelvael input que tenga el nombre sexo y que verifique si el radio esta lleno o no para que pueda ser registrado
    let tsexo=document.querySelector('input[name="sexo"]:checked');
    let telegirpuesto=document.getElementById("puesto");
    let tcomenta=document.getElementById("comenta");
    
    let pnombre=tnombre.value;
    let papellido=tapellido.value;
    let prut=trut.value;
    let ptelefono=ttelefono.value;
    let pemail=temail.value;
    //aqui nosotros declaramos la variable psexo y llammos a la variable tsexo el "?" es un operador que permite hacer una operacion condicional que se evalua como true o false 
    let psexo=tsexo ? tsexo.value:""
    let pelegirpuesto=telegirpuesto.value;
    let pcomenta=tcomenta.value;
    if(!psexo||!pemail||!prut){
        alert ("debe llenar el dato o marcar");
        return;
    }
    if (!/^[a-zA-Z\s]*$/.test(pnombre)) {
        alert("El nombre no puede contener números");
        return;
    };
    if (!/^[a-zA-Z\s]*$/.test(papellido)) {
        alert("El apellido no puede contener números");
        return;
    };
    if (!/^[0-9]{9}$/.test(ptelefono)) {
        alert("El teléfono debe contener exactamente 9 números");
        return;
    }

    let objeto={
        nombre:pnombre,
        apellido:papellido,
        rut:prut,
        telefono:ptelefono,
        email:pemail,
        sexo:psexo,
        elegirpuesto:pelegirpuesto,
        comentario:pcomenta
    }
    registrartrabajador(objeto).then(()=>{
        alert("🎊🎊 se registro con exito 🎊🎊");
        mostrar()
    }).catch((error)=>{
        alert("ha pasodo algo")
        console.log(error)
    })
}
const mostrar=()=>{
    mostradb().then((trabajador)=>{
        console.log(trabajador)
        let estructura=""
        trabajador.forEach((t)=>{
            estructura+="<tr>"
            estructura+="<th><strong>"+t.nombre+"</strong></th>"
            estructura+="<th><strong>"+t.apellido+"</strong></th>"
            estructura+="<th><strong>"+t.rut+"</strong></th>"
            estructura+="<th><strong>"+t.telefono+"</strong></th>"
            estructura+="<th><strong>"+t.email+"</strong></th>"
            estructura+="<th><strong>"+t.sexo+"</strong></th>"
            estructura+="<th><strong>"+t.elegirpuesto+"</strong></th>"
            estructura+="<th>"+t.comentario+"</th>"
            estructura+="<th><button id='UPD"+t.id+"'>ACTUALIZAR</button></th>"
            estructura+="<th><button id='DEL"+t.id+"'>ELIMINAR</button></th>"
            estructura+="</tr>"
        })
        document.getElementById("cuerpoDB").innerHTML=estructura;
        trabajador.forEach((t)=>{
            let elemento=document.getElementById("UPD"+t.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value=t.nombre;
                document.getElementById("UPDapellido").value=t.apellido;
                document.getElementById("UPDrut").value=t.rut;
                document.getElementById("UPDtelefono").value=t.telefono;
                document.getElementById("UPDemail").value=t.email;
                document.getElementById("UPDsexo").value=t.sexo;
                document.getElementById("UPDpuesto").value=t.elegirpuesto
                document.getElementById("UPDcomenta").value=t.comentario
                document.getElementById("btnactualizar").value=t.id
            });
            let botoneliminar=document.getElementById("DEL"+t.id);
            botoneliminar.addEventListener("click",()=>{
                if(confirm("desea eliminar a:\n"+t.nombre+" "+t.apellido)){
                    console.log("vamos a eliminar")
                    eliminartrabajador(t.id).then(()=>{
                        alert("🎊🎊 se elimino correctamente 🎊🎊")
                        mostrar()
                    })
                }
                else(console.log("se canselo la eliminacion"))
            })
        })
    })
}


const actualizar=()=>{
    let tnombre=document.getElementById("nombre")
    let tapellido=document.getElementById("apellido")
    let trut=document.getElementById("UPDrut");
    let ttelefono=document.getElementById("UPDtelefono");
    let temail=document.getElementById("UPDemail");
    //aqui se implementa queryselector que es un metodo que permite entrar al DOM y extraer los elementos en este caso yo quiero que esto me devuelvael input que tenga el nombre sexo y que verifique si el radio esta lleno o no para que pueda ser registrado
    let tsexo=document.querySelector('input[name="sexo"]:checked');
    let telegirpuesto=document.getElementById("UPDpuesto");
    let tcomenta=document.getElementById("UPDcomenta");
    
    let pnombre=tnombre.value;
    let papellido=tapellido.value;
    let prut=trut.value;
    let ptelefono=ttelefono.value;
    let pemail=temail.value;
    //aqui nosotros declaramos la variable psexo y llammos a la variable tsexo el "?" es un operador que permite hacer una operacion condicional que se evalua como true o false 
    let psexo=tsexo ? tsexo.value:""
    let pelegirpuesto=telegirpuesto.value;
    let pcomenta=tcomenta.value;
    //if(!psexo||!pelegirpuesto){
        // alert ("debe marcar una de las opciones");
        //return;
    //}
    let objeto={
        nombre:pnombre,
        apellido:papellido,
        rut:prut,
        telefono:ptelefono,
        email:pemail,
        sexo:psexo,
        elegirpuesto:pelegirpuesto,
        comentario:pcomenta
    }
    let id=document.getElementById("btnactualizar").value;
    actualizartrabajadores(objeto,id).then(()=>{
        alert("🎊🎊🎊 se actualizo con exito 🎊🎊🎊")
    })
}

function colormode(){
    const body=document.body;
    body.classList.toggle("oscuro")
    body.classList.toggle("iluminado")
}

function tamañoletra(){
    const body=document.body;
    body.classList.toggle("letran")
    body.classList.toggle("letra")

}