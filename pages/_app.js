import FilterProvider from '@components/providers/filterContext'
import UserProvider from '@components/providers/userContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <UserProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </UserProvider>
  )
}

export default MyApp
