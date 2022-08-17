import { db } from "@firebase/clientApp"
import { doc, updateDoc } from "firebase/firestore"

export const useUpdateConjugate = async (conjugateID, updateObj) => {

    //recieve an object with field: newValue - updateObj
    // Maybe recieve an Array of all the changes and then updates.forEach(() => updateDoc etc) ??

    let error = null
    try {
        const conjugateRef = doc(db, 'conjugates', conjugateID)
        await updateDoc(doc(conjugateRef, updateObj))
    } catch (e) {
        error = e
    }
    return {
        error
    }
}