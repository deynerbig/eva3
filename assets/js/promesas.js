import {db} from "./firebase.js"
import {} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
 export const registrartrabajador=async(trabajo)=>{
    const docref=await addDoc(collection(db,"trabajadores"),trabajo);
 }