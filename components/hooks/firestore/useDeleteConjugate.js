import { db } from "@firebase/clientApp"
import { doc, deleteDoc } from "firebase/firestore"

export const useDeleteConjugate = async (conjugateID) => {
    let error = null
    try {
        await deleteDoc(doc(db, 'conjugates', conjugateID))
        console.log('Success!')
    } catch (e) {
        error = e
        console.log('Error', e)
    }
    return {
        error
    }
}