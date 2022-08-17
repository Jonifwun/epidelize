import { useState } from 'react'
import { BsMenuDown } from 'react-icons/bs'
import { FaWindowClose } from 'react-icons/fa'

const gates = [
    'Synthesis and characterization of compound',
    'Processed into drug delivery device',
    'Drug release from device in aqueous media',
    'Extrusion and further processability'
]

const iconStyles = 'bg-white p-1 ml-auto rounded-md hover:cursor-pointer hover:scale-[1.2] transition duration-150'

const Gate = ({conjugate}) => {

    const [summaryOpen, setSummaryOpen] = useState(false)

    const { gate: { gatesPassed, failed, summary, id } } = conjugate

    const handleClick = () => {
        setSummaryOpen(!summaryOpen)
    }

  return (
    <div className="w-full bg-blue-700 rounded-md text-center text-white mb-5"> 
        <ol className="items-center sm:flex grid grid-cols-4 my-3 p-5">
            { gates.map((description, index) => {
                return (        
                <li key={ id } className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className={`flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ${ index + 1 < gatesPassed ? 'ring-green-500' : index + 1 == gatesPassed ? 'ring-red-500' : 'ring-white'} sm:ring-8 shrink-0`}>
                            <svg className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
                    </div>
                    <div className="mt-3 sm:pr-8">
                        <h3 className={`text-lg font-semibold ${ (failed && gatesPassed == index + 1) ? 'text-red-500 bg-white' : 'text-white' }`}>
                            Gate { index + 1 } { (failed && gatesPassed == index + 1) ? '- Failed' : ''}
                        </h3>
                        <p className="text-base font-normal text-white">{ description }</p>
                    </div>
                </li>
            )})}
        </ol>        
        <div className='bg-white text-blue-700 shadow-xl border border-blue-700 overflow-hidden rounded-b-md flex flex-col'>      
            {
                !summaryOpen ? 
                <BsMenuDown color='blue' className={ iconStyles } size='1.5em' onClick={ handleClick }/> 
                : 
                <FaWindowClose color='blue' className={ iconStyles } size='1.5em' onClick={ handleClick }/>

            }
            { summaryOpen &&
                <>
                    <span className="w-3/4 p-0.2 bg-blue-700 mx-auto rounded-md" />
                    <div>Open</div>
                </>
            }
        </div>
    </div>
    )
}

export default Gate