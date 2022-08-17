import { signInWithEmailAndPassword, getAuth } from "firebase/auth"

export const useLogin = async (authState) => {
    const auth = getAuth()
    let error = null
    try {
      await signInWithEmailAndPassword(auth, authState.emailAddress, authState.password)
    } catch (e) {
      error = e
    }
    return {
      error
    }
  }