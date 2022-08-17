import { useContext, createContext, useState } from "react"
import { filterFields } from "@constants/formFields"

const FilterContext = createContext({})

const FilterProvider = ({ children }) => {

    let filterState = {}
    filterFields.forEach(field => filterState[field.id] = false)

    const [fieldState, setFieldState] = useState(filterState)
    const [range, setRange] = useState({
        lower: 0,
        upper: 12
    })

    const value = {
        fieldState,
        setFieldState,
        range,
        setRange
    }

    return (
        <FilterContext.Provider value={ value }>
            { children }
        </FilterContext.Provider>
    )
}

export default FilterProvider

export function useGetFilters () {
    return useContext(FilterContext)
}