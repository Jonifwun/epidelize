import { useGetUser } from '@components/providers/userContext'
import { useRouter } from 'next/router'
import UserDisplay from '../UserDisplay'
import { AiOutlineCodepenCircle } from 'react-icons/ai'
import ActiveLink from '../ActiveLink'

const Header = ({ onSearchChange, searchTerm }) => {

  const { pathname } = useRouter()
  const userApi = useGetUser()

  const LINKS = [
    {
      href: '/',
      value: 'Home'
    },
    {
      href: '/conjugates',
      value: 'Conjugates'
    },
    {
      href: '/pipeline',
      value: 'Pipeline'
    }
  ]

  return (
    <section>
        <div className="fixed pt-4 px-2 sm:px-6 lg:px-8 rounded-md mt-1 bg-blue-500 mr-10 mb-10 z-50 max-w-7xl w-full">
            <nav className="relative" aria-label="Global">
              <div className="flex justify-between items-center align-middle pb-5">
                  <div className='flex flex-row items-center'>
                  <AiOutlineCodepenCircle className='mr-5 h-9 w-9' color='white'/>
                      {
                        LINKS.map(link => {
                          return (
                            <div className="bg-blue-400 py-2 px-3 rounded-md text-white items-center shadow-xl mr-5" key={ link.value }>
                              <ActiveLink href={ link.href }>                  
                                <a className="font-medium text-white hover:text-gray-900">{ link.value }</a>
                              </ActiveLink>
                            </div>
                          )
                        })
                      }
              </div>
                <div>
                  { (pathname == '/conjugates' || pathname =='/' ) && 
                    <form>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>         
                        <input 
                          type="search"
                          id="default-search"
                          className="block p-4 pl-10 rounded-sm w-50 text-sm text-gray-900 bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Search conjugates..."
                          required
                          value={ searchTerm }
                          onChange={ onSearchChange }
                        />
                    </form>
                  }
                  
                  </div>
                    {
                      pathname == '/' || pathname == '/conjugates' ?
                      <div className="bg-indigo-400 py-2 px-3 rounded-md text-white items-center shadow-xl">
                        <ActiveLink href='/conjugates/newconjugate'>
                          <a className="font-medium mr-8 text-white hover:text-gray-900">Add New Conjugate</a>
                        </ActiveLink>
                      </div>
                      : null
                    }
                    {
                      userApi ? <UserDisplay userApi={ userApi }/> : 'Login'
                    }       
              </div>
            </nav>
        </div>
    </section>
  )
}

export default Header