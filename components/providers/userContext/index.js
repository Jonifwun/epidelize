import { useContext, createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase/clientApp'
import { setupFirebasehooks } from '@components/hooks/setupFirebaseHooks'
import { setupFirestoreHooks } from '@components/hooks/setupFirestoreHooks'

const UserContext = createContext({})

const UserProvider = ({ children }) => {

    const [userApi, setUserApi] = useState({
        user: null,
        userID: null,
        firebaseHooks: setupFirebasehooks(),
        firestoreHooks: setupFirestoreHooks()
    })

    useEffect(() => {
        const loadUser = async () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.uid;
                  setUserApi(api => ({
                    ...api,
                    userID: uid,
                    user
                }))
                } else {
                    setUserApi(api => ({
                        ...api,
                        user: null
                    }))
                }
              });
        }
        loadUser()
    }, [])

    return (
        <UserContext.Provider value={ userApi }>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider

export function useGetUser () {
    return useContext(UserContext)
}
