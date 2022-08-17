import { ConjugateCard, Filter } from "@components/conjugate";
import { Layout, Loader } from "@components/ui";
import { useEffect, useState } from 'react'
import { db } from "@firebase/clientApp";
import { collection, getDocs, addDoc } from "firebase/firestore";
// import { getAllConjugates } from "./content/fetcher";

export default function Home({ conjugates }) {

  const [searchTerm, setSearchTerm] = useState('')
  const [filterDisplay, setFilterDisplay] = useState(false)
  const [filters, setFilters] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const onSearchChange = (e) => {
      e.preventDefault()
      setSearchTerm(e.target.value)
  }
// // ONLY USE THIS CODE IF YOU WANT TO POPULATE THE DATABASE
//   const populateDatabase = async () => {
//     const {conjugates} = getAllConjugates()
//     conjugates.forEach(async (conjugate) => {
//       try {
//         const docRef = await addDoc(collection(db, 'conjugates'), conjugate)
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error('Error adding document:', e)
//       }
//     })
//   }
//   populateDatabase()

  // const user = useGetUser()

  const filteredConjugates = conjugates.filter(conjugate => {
    //Check if there is a search term or if filters are applied. If no, return everything
   if (!searchTerm.length || !filters.length){
    return conjugate
   }
   //If yes, filter the conjugates based on the filter/search term
   else if(searchTerm.length || filters.length){
     //Check for any matches of search term to any keywords
     const matches = conjugate.keywords.filter(keyword => keyword.includes(searchTerm))
     //return conjugate if there are any matches
     if (matches.length){
       return conjugate
     }    
   }
  })

  return (
    <>
      <Layout 
        onSearchChange={ onSearchChange }
        searchTerm={ searchTerm }
      >
        <div className="flex flex-col">
          <p
            className="text-white bg-blue-500 hover:cursor-pointer text-sm rounded-md w-fit p-2 mt-28 ml-auto"
            onClick={() => setFilterDisplay(!filterDisplay)}
          >
            Filter Types { filterDisplay ? <span>&#9650;</span> : <span>&#9660;</span> }
          </p>
            {
              !conjugates ? 
              <Loader size='xl'/>
              :
              <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5 mt-5">
                { filterDisplay &&
                  <Filter setFilters={ setFilters } setFilterDisplay={ setFilterDisplay } setSearchResults={ setSearchResults }/>
                }
                { searchResults.length ?                
                  searchResults.map(conjugate => {
                    return <ConjugateCard key={conjugate.id} conjugate={ conjugate }/>
                  })
                : 
                filteredConjugates.map(conjugate => {
                    return <ConjugateCard key={conjugate.id} conjugate={ conjugate }/>
                  })
                }
              </section>
            }
        </div>        
      </Layout>
    </>
  )
}

export async function getStaticProps  () {
  let conjugates = []
  
  const querySnapshot = await getDocs(collection(db, "conjugates"))
  querySnapshot.docs.forEach(snapshot => {
    const data = JSON.parse(JSON.stringify(snapshot.data()))
    conjugates.push({...data, id: snapshot.id})
  })
  
    return {
      props: {
        conjugates
      }
    }
}
