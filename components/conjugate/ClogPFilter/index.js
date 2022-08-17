import { useEffect, useState } from 'react'

const errorMessages = {
    outOfRange: 'The values you have chosen are out of range',
    minMax: 'Minimum value must be less than the maximum'
}

const ClogPFilter = ({ range, setRange }) => {

    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setError(false)
        setRange({
            ...range,
            [e.target.id] : Number([e.target.value])
        })
    }

    useEffect(() => {
        if (range.lower > range.upper) setError(errorMessages.minMax)
        else if (range.lower < 0 || range.upper > 12) setError(errorMessages.outOfRange)
    }, [range])

  return (
    <div className='bg-blue-100 text-black text-center normal-case'>
        <h3>ClogP range:</h3>
        <h6 className='text-xs'>Please choose a value between 0 and 12</h6>
        { error && <h6 className='text-xs text-red-500'>{ error }</h6>}
        <div className='flex flex-row justify-between p-3'>
            <label htmlFor='lower'>
                Min:
            </label>
            <input type='number' id='lower' name='lower' onChange={ handleChange } min='0' max='12' value={ range.lower }/>
            <label htmlFor='upper'>
                Max:
            </label>
            <input type='number' id='upper' name='upper' onChange={ handleChange } min='0' max='12' value={ range.upper }/>
        </div>
    </div>
  )
}

export default ClogPFilter