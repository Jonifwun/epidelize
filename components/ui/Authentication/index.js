import { Separator, Loader, LoginSignUpLink } from '@components/ui'
import { useState } from 'react'
import Input from '@components/ui/Input'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useGetUser } from '@components/providers/userContext'
import Link from 'next/link'


const Authentication = ({ type, authFields }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()
    const { firebaseHooks: { createAccount, login } } = useGetUser()

    //Create a state for each field, populate it and give each a value of null
    let fieldsState = {}
    authFields.forEach(field => fieldsState[field.id] = '')

    const [authState, setAuthState] = useState(fieldsState)
    const handleChange = (e) => {
        setAuthState({
            ...authState,
            [e.target.id]: e.target.value
        })
    }

    const handleSignUp = async () => {
        setLoading(true)
        const { error } = await createAccount(authState)
        error ? setError(error) : router.push('/profile')
        setLoading(false)
    }

    const handleLogin = async () => {
        setLoading(true)
        const { error } = await login(authState)
        error ? setError(error) : router.push('/')
        setLoading(false)
    }

  return (
    <div className="bg-blue-400 shadow-xl border border-blue-500 overflow-hidden md:max-w-2xl flex flex-row">
        <Image 
                src='/99.jpg'
                alt='bg'
                width={200}
                height={340}
                objectFit='cover'
                objectPosition='center'
                className='w-full'
        />
        <form className={`bg-white shadow-md p-8 grid grid-cols-1 gap-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold`}>
            { type }
            <Separator size='full'/>
            <div className={`grid grid-cols-${type == 'Sign Up' ? '2' : '1'} gap-4`}>
                {
                    authFields.map(field => {
                        return(
                            <Input 
                                key={field.id}
                                handleChange={handleChange}
                                value={authState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        )
                    })
                }           
                </div>
            <div className="mx-auto">                
                { loading ? <Loader size='sm'/> : 
                    <button onClick={ type == 'Log In' ? handleLogin : handleSignUp } className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        { type }
                    </button>
                }
            </div>
            <Separator colour='blue-400'/>
            { error && error.code }
            <div className="flex flex-row justify-between">
            <LoginSignUpLink type={ type }/>
            {
                type == 'Log In' && 
                <p className='text-black font-light normal-case mx'>
                    <Link href='/'>
                        <a className='text-indigo-500 ml-3'>
                            Forgot Password?
                        </a>
                    </Link>
                </p>
            } 
            </div>
        </form>
    </div>       
  )
}

export default Authentication