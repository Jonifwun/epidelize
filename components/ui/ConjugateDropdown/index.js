import Link from 'next/link'
import Separator from '../Separator'
import { useGetUser } from '@components/providers/userContext'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ConjugateDropdown = ({ showDropdown, popoverDropdownRef, id }) => {

    const { firestoreHooks: { deleteConjugate } } = useGetUser()
    const [error, setError] = useState(false)
    const router = useRouter()

  return (
    <div
        ref={ popoverDropdownRef }
        className={ (showDropdown ? "block " : "hidden ") + "absolute text-base z-50 py-2 list-none text-left rounded shadow-lg mt-5 bg-blue-400"}
    >
        <Link href='/profile'>
            <a className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}>
                Edit Conjugate
            </a>
        </Link>
        <Separator colour={'white'} size={'3/4'} />
        <a
            className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:cursor-pointer text-white"}
            onClick={async e => {

                const { error } = await deleteConjugate(id)
                error ? setError(error) : router.push('/')
            }}
        >
            Delete Conjugate
        </a>
    </div>
  )
}

export default ConjugateDropdown