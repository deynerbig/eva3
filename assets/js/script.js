import {registrartrabajador,actualizartrabajadores,mostradb,eliminartrabajador} from "./promesas.js"
window.addEventListener("load",()=>{
    document.getElementById("btnregistro").addEventListener("click",registrar)
    document.getElementById("btnactualizar").addEventListener("click",actualizar)
    document.getElementById("btncolor").addEventListener("click",colormode)
    document.getElementById("btntamaño").addEventListener("click",tamañoletra)
    mostrar()
})
// aqui creamos una variable constante que tiene una funcion vacia y una funcion flecha creamos variables para recuperar el id de los input 
//y luego creamos otras variables pero que estas recuperen la variable que contenia 
//la id a esto se le implementa value para establecer el valor actual del elemento
//creamos un objeto el cual se usara para la promesa en este caso registrartrabajador 
//es la promesa y usamos then para nos da la respuesta de la promesa 
//en este caso un alert que dice que se registro correctamente 
const registrar=()=>{
    let tnombre=document.getElementById("nombre");
    let tapellido=document.getElementById("apellido");
    let trut=document.getElementById("rut");
    let ttelefono=document.getElementById("telefono");
    let temail=document.getElementById("email");
    //aqui se implementa queryselector que es un metodo que permite entrar al DOM y extraer los elementos 
    //en este caso yo quiero que esto me devuelva el input que tenga el nombre sexo y que verifique si el 
    //radio esta lleno o no para que pueda ser registrado
    let tsexo=document.querySelector('input[name="sexo"]:checked');
    let telegirpuesto=document.getElementById("puesto");
    let tcomenta=document.getElementById("comenta");
    
    let pnombre=tnombre.value;
    let papellido=tapellido.value;
    let prut=trut.value;
    let ptelefono=ttelefono.value;
    let pemail=temail.value;
    //aqui nosotros declaramos la variable psexo y llamamos a la variable tsexo el "?" es un operador que permite 
    //hacer una operacion condicional que se evalua como true o false en este caso lo que intenta hacer es demostrar que el usuario 
    //marco uno de los dos puntos las comillas son para que psexo siempre tenga un valor incluso si tsexo es de tipo de valor nulo  
    let psexo=tsexo ? tsexo.value:""
    let pelegirpuesto=telegirpuesto.value;
    let pcomenta=tcomenta.value;
    //aqui lo que se intenta es verificar que el usuario ingrese un valor y si este no ingresa el valor correspondiente lanzara un mensaje que diga que debe llenar los datos
    //"||" este es un operador or en este caso true or false 
    //"!"este operador combierte el true al false y el false a true dando como resultado que combierte en lo contrario en el valor en el cual se coloque esto solo sirve con valores booleanos
    //entonces si el valor es true psexo una vez que verifica que dentro de esa variable se haya un algo para que el false se combierta a true y pueda pasar o lo mismo con los demas cuando 
    //el valor pase a ser true continuara pero si el valor es false enviara un alert con un mensaje  y retornara el mensaje una y otra vez hasta que ingrese un valor  
    if(!psexo||!pemail||!prut||!pnombre||!ptelefono||!papellido){
        alert ("debe llenar el dato");
        return;
    }
    // "/" este simbolo delimitara la exprecion que se hara a continuacion
    //"^" indica que el inicio de toda la estructura
    //[a-zA-Z] dice que la exprecion solo nos permitira ingresa de la "a" a la "z" ya sea mayuscula o minuscula
    // "\s" esto hara que los espacios no cuente como texto ocea los eliminara como un trim
    //"*" esto significa que los espacios en blanco pueden aparecer cero o mas veces
    //"$" indica que el problema ha sido finalizado
    //".test" busca si hay algun tipo de similitud con la expresion regular y devuelve true si la hay y si no pues devuelve false
    //entonces la exprecion dice que de la a a la z contando mayusculas, minusculas, espacios esto deberia coincidir con lo que el usuario ingrese y si es que no pues 
    //mandara un alert y lo retornara hasta que lo que pide exprecion sea cumplida  
    if (!/^[a-zA-Z\s]*$/.test(pnombre)) {
        alert("el nombre no puede contener numeros");
        return;
    };
    if (!/^[a-zA-Z\s]*$/.test(papellido)) {
        alert("el apellido no puede contener numeros");
        return;
    };
    //esto valida si lo que ingrese el usuario son numeros y tienen que ser 9 en total 
    //si ingresa mas o menos este lanzara un error sigue la misma logica que el anterior
    if (!/^[0-9]{9}$/.test(ptelefono)) {
        alert("el teléfono debe contener exactamente 9 numeros");
        return;
    }

    var objeto={
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
//creamos una variable constante de actualizar y una funcion vacia que contenga el id de los input usando las variables que contenian los id en registrar le ponemos value para establecer el valor del elemento
//creamos un objeto llamamos a la promesa y que contenga el objeto y el id y que cuando esto se cumpla haya una funcion flecha que lance un alert que diga que se actualizo correctamente
//se le agrega variable mostrar para que los cambios sean visibles en la pagina  
const actualizar=()=>{
    let id=document.getElementById("btnactualizar").value;
    let tnombre=document.getElementById("nombre").value;
    let tapellido=document.getElementById("apellido").value;
    let trut= document.getElementById("rut").value;
    let ttelefono=document.getElementById("telefono").value
    let temail=document.getElementById("email").value;
    let tsexo=document.querySelector('input[name="sexo"]:checked');
    let telegirpuesto=document.getElementById("puesto").value;
    let tcomenta=document.getElementById("comenta").value;
    ////aqui nosotros declaramos la variable psexo y llamamos a la variable tsexo el "?" es un operador que permite 
    //hacer una operacion condicional que se evalua como true o false en este caso lo que intenta hacer es demostrar que el usuario 
    //marco uno de los dos puntos las comillas son para que psexo siempre tenga un valor incluso si tsexo es de tipo de valor nulo  
    let psexo=tsexo ? tsexo.value : "";
    let objeto={
        nombre: tnombre,
        apellido: tapellido,
        rut: trut,
        telefono: ttelefono,
        email: temail,
        sexo: psexo,
        elegirpuesto: telegirpuesto,
        comentario: tcomenta
    }
    actualizartrabajadores(objeto, id).then(() => {
        alert("🎊🎊🎊 Se actualizo con éxito 🎊🎊🎊");
        mostrar();
    }).catch((error) => {
        alert("error ayudaaa");
        console.log(error);
    });
}
//creamos la variable constante mostrar y creamos una funcion anonima y una funcion flecha que almacena la promesa 
//mostrarDB() implementamos then  esperamos a que recupere lo que le pedimos a la promesa y creamos una funcion adentro de then esta funcion tendra nombre 
//sera trabajador y ejecutamos en la consola luego creamos una variable que se llame estructura y que este vacia para posteriormente llenar los datos
//ahora se llama a trbajador y usamos foreach esto nos permitira ejecutar de manera individual una funcion para cada elemento en el array 
//esto nos ayudara a imprimir en la consola los datos
//adentro de foreach habra una funcion que t que contendra los valores de cada trabajador por separado para fromar la estructura de html usamos la variable 
//vacia estructura y a esta vamos a concatenar las etiquetas con los id esto tambien poniendo el id en la funcion 
//los botones actualizar y eliminar se les asigna un id y se les concatena con la funcion que contine el id del usuario
const mostrar=()=>{
    mostradb().then((trabajador)=>{
        console.log(trabajador)
        let estructura=""
        trabajador.forEach((t)=>{
            estructura+="<tr>"
            estructura+="<th><strong>"+t.nombre+"</strong></th>";
            estructura+="<th><strong>"+t.apellido+"</strong></th>";
            estructura+="<th><strong>"+t.rut+"</strong></th>";
            estructura+="<th><strong>"+t.telefono+"</strong></th>";
            estructura+="<th><strong>"+t.email+"</strong></th>";
            estructura+="<th><strong>"+t.sexo+"</strong></th>";
            estructura+="<th><strong>"+t.elegirpuesto+"</strong></th>";
            estructura+="<th>"+t.comentario+"</th>";
            estructura+="<th><button id='UPD"+t.id+"'>ACTUALIZAR</button></th>";
            estructura+="<th><button id='DEL"+t.id+"'>ELIMINAR</button></th>";
            estructura+="</tr>";
        })
//la id de tbody en html se usa para para hacer cambios en el html atravez de js 
//la variable trabajador una vez mas tendra una funcion en la cual usara t para que almacene la informacion de cada uno de los elementos 
//y ahora para actualizar cada elemento se le agregara UPD a los id si es que estos existen por lo que si la condicion se cumple cuando el usuario de click llevara los datos del usuario y 
// una vez hecho eso los elementos seran actualizados si es que se modifica un dato.
        document.getElementById("cuerpoDB").innerHTML=estructura;
        trabajador.forEach((t)=>{
            let elementoactualizado=document.getElementById("UPD"+t.id);
            if(elementoactualizado){
            elementoactualizado.addEventListener("click",()=>{
                document.getElementById("nombre").value=t.nombre;
                document.getElementById("apellido").value=t.apellido;
                document.getElementById("rut").value=t.rut;
                document.getElementById("telefono").value=t.telefono;
                document.getElementById("email").value=t.email;
//querySelector es un metodo el cual se usa para para buscar etiquetas con ciertos criterios que yo le de en este caso un input que tenga name sexo
//en este caso busca la etiquete que yo le pida. Value permite que el elemento se registre con un nombre en especifico en este caso hombre o mujer y que en la base de datos 
//lo registre y lo muestre por el sexo que haya elegido es mas para que lo muestre en la pagina y checked dira si el elemento
//esta marcado o no y deberia dar verdero y mostrar el sexo que el usuario haya puesto  
                document.querySelector('input[name="sexo"][value="' + t.sexo + '"]').checked = true;
                document.getElementById("puesto").value=t.elegirpuesto;
                document.getElementById("comenta").value=t.comentario;
                document.getElementById("btnactualizar").value=t.id;
            });
        }
            let botonEliminar = document.getElementById("DEL"+t.id);
            if(botonEliminar){
                botonEliminar.addEventListener("click",()=>{
                    if (confirm("desea eliminar a:\n"+ t.nombre+" "+t.apellido)) {
                        console.log("vamos a eliminar");
                        eliminartrabajador(t.id).then(() => {
                            alert("🎊🎊 se elimino al trabajador 🎊🎊");
                            mostrar()
                        }).catch((error) => {
                            alert("un error ha ocurrido");
                            console.log(error);
                        });
                    } 
                    else {console.log("se cancelo la eliminacion")}
                });
            }
        })
    })
}
// creamos una funcion para que cambiara el color primero la funcion se crea y una vez hecha este mismo contendra 
//una variable constante que se llama "todo" esto recuperara el elemento 
//budy y lo que para mi es un interruptos usamos toggle y classlist que juntos pueden alternar una clase  
function colormode(){
    const todo=document.body;
    todo.classList.toggle("oscuro");
    todo.classList.toggle("iluminado");
}

function tamañoletra(){
    const tamaño=document.body;
    tamaño.classList.toggle("letran");
    tamaño.classList.toggle("letra");

}