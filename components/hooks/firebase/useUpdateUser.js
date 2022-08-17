import { updateProfile, getAuth } from "firebase/auth"

export const useUpdateUser = async (authState) => {
    const auth = getAuth()
    let error = null
    try {
        await updateProfile(auth.currentUser, { displayName: authState.displayName })
    } catch (e) {
      error = e
    }
    return {
        error
    }
}