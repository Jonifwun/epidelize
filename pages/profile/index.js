import { useState } from 'react'
import { useGetUser } from "@components/providers/userContext"
import { Layout, Loader, Separator, UpdateEmail } from "@components/ui"
import Image from "next/image"
import { useRouter } from 'next/router'
import { BiUserCircle }  from 'react-icons/bi'
// 

const UserProfile = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [updateEmailOpen, setUpdateEmailOpen] = useState(false)
    const [error, setError] = useState()
    const { user, userID, firebaseHooks: { deleteAccount, updateEmailAddress } } = useGetUser()

    
    const handleDelete = async () => {
      setLoading(true)
      const { error } = await deleteAccount(user)
      error ? setError(error) : router.push('/login')
      setLoading(false)
    }

    const handleUpdate = async () => {
      setLoading(true)
      const { error } = await updateEmailAddress()
      error && setError(error)
      setLoading(false)
    }

    //Need to turn this page into three equal columns
  return (
    <>
        <Layout>
          <section className="grid mb-5 mt-28 place-content-center">
            <div className="bg-blue-400 shadow-xl border border-blue-500  overflow-hidden flex flex-row">
              <Image 
                src='/99.jpg'
                alt='bg'
                width={200}
                height={340}
                objectFit='cover'
                objectPosition='center'
                className='w-full'
              />
              <div className="bg-white shadow-md p-4 grid grid-cols-1 justify gap-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold w-2/6">
                Profile
                <div>           
                  <Separator size='3/4' />
                  <BiUserCircle className='mx-auto w-10 h-10'/>   
                </div>
              <div>    
                { error && error.code }
            </div>
            <p>
              User ID: <span className="text-black font-normal normal-case">{ userID }</span>
            </p>
            <p>
              Display Name: <span className="text-black font-normal">{ user?.displayName }</span>
            </p>
            <p>
            Email: <span className="text-black font-normal normal-case">{ user?.email }</span>
            </p>  
            </div>
            
            <div className="bg-white shadow-md p-4 grid grid-cols-1 justify gap-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold w-2/6">
              Settings
              <div>              
                <Separator size='3/4' />
              </div>
              <div>
                Setting 1
                <p className='normal-case text-black font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit.</p>
              </div>
              <div>
                Setting 2
                <p className='normal-case text-black font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit.</p>
              </div>
              <div>
                Setting 3
                <p className='normal-case text-black font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit.</p>
              </div>
            </div>
            <div className="bg-white shadow-md p-4 grid grid-cols-1 justify gap-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold w-2/6">
              Account
              <div>              
                <Separator size='3/4' />
              </div>
              <div className="mx-auto flex flex-col"> 
              Delete Account               
                  { loading ? <Loader size='sm'/> : 
                      <button onClick={ handleDelete } className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Delete
                      </button>
                  }
              </div>
              <div>              
                <Separator size='3/4' />
              </div>
              <div className="mx-auto flex flex-col"> 
              Update Email Address         
                <p className='normal-case text-black font-thin'>To update your email address, please enter your new email address and confirmation below:</p>      
                  { loading ? <Loader size='sm'/> : 
                      <button onClick={() => setUpdateEmailOpen(!updateEmailOpen) } className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Update Email Address
                      </button>
                  }
                  { updateEmailOpen && <UpdateEmail /> }
              </div>
            </div>
            </div>
          </section>
        </Layout>
    </>
  )
}

export default UserProfile