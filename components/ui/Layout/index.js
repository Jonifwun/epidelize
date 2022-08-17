import { Header, Footer } from '@components/ui'

const Layout = ({children, onSearchChange }) => {
    return (
        <>
          <div className="max-w-7xl flex flex-col min-h-screen mx-auto">
            <Header 
              onSearchChange={ onSearchChange }
            />
                <div className="flex-grow">{ children }</div>
            <Footer/>
          </div>
        </>
    )
  }
  
  export default Layout
  