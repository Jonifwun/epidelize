import Link from "next/link"

const LoginSignUpLink = ({ type }) => {

    const items = {
        'Log In': {
            href: 'Sign Up',
            text: 'Need to register?'
        },
        'Sign Up': {
            href: 'Log In',
            text: 'Already registered?'
        }
    }

  return (
        <p className='text-black font-light normal-case mx'>{items[type].text}
            <Link href={ `/${items[type].href.toLowerCase().replace(/ /g, '')}` }>
                <a className='text-indigo-500 ml-3'>
                    { items[type].href }
                </a>
            </Link>
        </p>
  )
}

export default LoginSignUpLink