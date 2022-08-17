import { useAddConjugate as createAddConjugate } from "./firestore/useAddConjugate"
import { useDeleteConjugate as createDeleteConjugate } from "./firestore/useDeleteConjugate"
import { useUpdateConjugate as createUpdateConjugate } from "./firestore/useUpdateConjugate"

export const setupFirestoreHooks = () => {
    return {
        addConjugate: createAddConjugate,
        deleteConjugate: createDeleteConjugate,
        updateConjugate: createUpdateConjugate
    }
}