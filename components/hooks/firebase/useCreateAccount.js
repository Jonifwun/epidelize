import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth"

export const useCreateAccount = async (authState) => {  
    let error = null
    try {
      const auth = getAuth()
      const userCredintial =  await createUserWithEmailAndPassword(auth, authState.emailAddress, authState.password)
      await updateProfile(auth.currentUser, { displayName: authState.displayName })
    } catch (e) {
      error = e
    }
    return {
        error,
        success: true
      }
}