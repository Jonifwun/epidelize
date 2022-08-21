import { collection, getDocs, query, where } from 'firebase/firestore'
import { FiRefreshCcw } from 'react-icons/fi'
import { filterFields } from '@constants/formFields'
import { db } from '@firebase/clientApp'
import { Separator } from '@components/ui'
import { ClogPFilter } from '@components/conjugate'
import { FaWindowClose } from "react-icons/fa"
import { useGetFilters } from '@components/providers/filterContext'


const Filter = ({ setFilters, setFilterDisplay, setSearchResults }) => {

    const { fieldState, setFieldState, range, setRange } = useGetFilters()

    const handleFieldChange = (e) => {
        setFieldState({
            ...fieldState,
            [e.target.id]: e.target.checked
        })
    }

    const handleUpdate = async () => {
        const filters = Object.entries(fieldState)
        .filter(field => field[1] == true)
        .map(field => field[0])
        
        const conjugatesRef = collection(db, 'conjugates')
        //
        let q;
        if (filters.length) {
            q = query(conjugatesRef,
                where('ClogP', '>=', range.lower), 
                where('ClogP', '<=', range.upper),
                where('hydrolysableBond', 'in', filters)
            )
        } else {
            q = query(conjugatesRef,
                where('ClogP', '>=', range.lower), 
                where('ClogP', '<=', range.upper)
            )
        }

        const querySnapshot = await getDocs(q)
        let results = []
        querySnapshot.forEach(doc => {
            results.push(doc.data())
        })
        setFilters(filters)
        setSearchResults(results)
        setFilterDisplay(false)
    }

  return (
    <div className="border mt-28 w-2/6 uppercase tracking-wide text-sm text-white shadow-xl  border-blue-500 absolute m-auto left-0 right-0 z-40 bg-blue-100">
        <div className="bg-blue-500">
            <FaWindowClose 
                color='white'
                size='1.5em'
                className='p-1 ml-auto rounded-md hover:cursor-pointer hover:scale-[1.2] transition duration-150'
                onClick={() => setFilterDisplay(false) }
                />
            <h1 className="text-center pb-3">Filter Options</h1>
        </div>
        <div>
            <ul className="text-black normal-case font-normal grid grid-cols-2 gap-3 p-4">
                { filterFields.map(field => {
                    return (
                        <li key={ field.id } className='space-between'>
                            <label htmlFor={ field.labelFor }>
                                { field.labelText }
                            </label>
                            <input
                                className="float-right hover:cursor-pointer"
                                type={ field.type }
                                id={ field.id } 
                                name={ field.name }
                                checked={ fieldState[field.id] }
                                onChange={ handleFieldChange }
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
        <Separator size='3/4' colour='white'/>
        {/* Separate out into its own component for error handling as well */}
        <ClogPFilter range={ range } setRange={ setRange } />
        <div 
            className="bg-blue-500 text-white flex flex-row font-normal normal-case justify-center items-center hover:cursor-pointer py-3"
            onClick={ handleUpdate }
        >
            <FiRefreshCcw className="mr-3" size='1.1em'/>
            <p>Update Results</p>
        </div>
    </div>
  )
}

export default Filter