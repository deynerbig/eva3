import {db} from "./firebase.js"
import {addDoc,collection,getDocs,updateDoc,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
 export const registrartrabajador=async(trabajo)=>{ 
   const documentoref=await addDoc(collection(db,"trabajadores"),trabajo);
 }
 export const mostradb=async()=>{
   const d=collection(db,("trabajadores"));
   const Q=await getDocs(d)
   console.log(Q)
   let lista=[];
   Q.forEach(doc => {
      console.log(doc.data())
      lista.push({...doc.data(),id:doc.id})
   });
   console.log(lista);
   return lista;
 }
export const actualizartrabajadores=async(objeto,id)=>{
   const referencia=doc(db,"trabajadores",id);
   await updateDoc(referencia,objeto);
}
export const eliminartrabajador=async(id)=>{
   const referencia=doc(db,"trabajadores",id);
   await deleteDoc(referencia);
}