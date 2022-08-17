
import { useState, createRef } from 'react'
import Link from 'next/link'
import { FaUsersCog } from "react-icons/fa"
import { createPopper } from '@popperjs/core'
import UserDropdown from '../UserDropdown'

const UserDisplay = ({ userApi }) => {

    const {firebaseHooks: { signOut }} = userApi
    
    const [showDropdown, setShowDropdown] = useState(false)
    const btnDropdownRef = createRef()
    const popoverDropdownRef = createRef()
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-start"
        });
        setShowDropdown(true);
      }
      const closeDropdownPopover = () => {
        setShowDropdown(false);
      };

  return (
    <div className='bg-blue-400 py-2 px-3 rounded-md text-white flex flex-wrap items-center shadow-xl'>
        <div className='relative inline-flex align-middle w-full'> 
        {
            userApi.user &&
            <div>
                <FaUsersCog
                    color='indigo'
                    className='mr-2 rounded-full hover:scale-[1.1] hover:cursor-pointer bg-white p-1 w-6 h-6'
                    ref={ btnDropdownRef }
                    onClick={() => {
                        showDropdown 
                            ? closeDropdownPopover()
                            : openDropdownPopover()
                    }}
                />
                <UserDropdown showDropdown={ showDropdown } popoverDropdownRef={ popoverDropdownRef } logout={ signOut }/>
            </div>
        }       
        { userApi.user ? userApi.user.displayName
            : <Link href='/login'>
                <button onClick={() => {
                setShowDropdown(false)
                }}>Sign In</button> 
             </Link>
        }
        {/* { userApi.user && 
            
        } */}
        </div>
    </div>
  )
}

export default UserDisplay