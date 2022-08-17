import { collection, addDoc } from "firebase/firestore"
import { db } from "@firebase/clientApp"

export const useAddConjugate = async (conjugate) => {
    //need to create a slug here

    const slug = conjugate.names.toLowerCase().trim().replace(' ', '-')
    const _conjugate = {
        ...conjugate,
        slug
    }
    let error = null  
    try {
        const docRef = await addDoc(collection(db, 'conjugates'), _conjugate)
            console.log("Document written with ID: ", docRef.id)
    } catch (e) {
        console.error('Error adding document:', e)
            error = e
    }
    return {
        error
    }
}