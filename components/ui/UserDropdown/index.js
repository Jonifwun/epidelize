import Link from 'next/link'
import Separator from '../Separator'

const UserDropdown = ({ showDropdown, popoverDropdownRef, logout }) => {
    
  return (
    <div
        ref={ popoverDropdownRef }
        className={ (showDropdown ? "block " : "hidden ") + "absolute text-base z-50 py-2 list-none text-left rounded shadow-lg mt-10 bg-blue-400"}
    >
        <Link href='/profile'>
            <a className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}>
                View Profile
            </a>
        </Link>
        <Separator colour={'white'} size={'3/4'} />
        <a
            className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:cursor-pointer text-white"}
            onClick={e => {
                e.preventDefault()
                logout()
            }}
        >
            Sign Out
        </a>
    </div>
  )
}

export default UserDropdown