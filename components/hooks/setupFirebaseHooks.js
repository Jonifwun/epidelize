import { useCreateAccount as createCreateAccount } from "./firebase/useCreateAccount"
import { useLogin as createLogin } from "./firebase/useLogIn"
import { useDeleteAccount as createDeleteAccount } from "./firebase/useDeleteAccount"
import { useSignOut as createSignOut } from "./firebase/useSignOut"
import { useUpdateUser as createUpdateUser } from './firebase/useUpdateUser'
import { useStorage as createUseStorage } from "./firebase/useStorage"

export const setupFirebasehooks = () => {
    return {
        createAccount: createCreateAccount,
        login: createLogin,
        deleteAccount: createDeleteAccount,
        signOut: createSignOut,
        updateUser: createUpdateUser,
        uploadImage: createUseStorage
    }
}