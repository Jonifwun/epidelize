import { deleteUser, getAuth } from "firebase/auth"

export const useDeleteAccount = async () => {
    const { currentUser } = getAuth()
    let error;
    try {
        await deleteUser(currentUser)
    }
    catch (e) {
        error = e
        console.log(error)
    }
    return {
        error
    }
}