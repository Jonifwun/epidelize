import { signOut, getAuth } from 'firebase/auth'

export const useSignOut = async () => {
    let error = null
    try {
        const auth = getAuth()
        await signOut(auth)
    }
    catch (e){
        error = e
    }

    return {
        error
    }
}