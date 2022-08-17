import Graph from "@components/conjugate/Graph";
import { Separator } from "@components/ui";
import Image from 'next/image'

const releaseStyles = "uppercase tracking-wide text-sm text-indigo-500 font-semibold"
const columnStyles = "p-5 bg-white rounded-md shadow-xl hover:scale-[1.5] transition duration-300 border hover:border-blue-700"

const Release = ({ conjugate }) => {

  const { releaseData } = conjugate

  return (  
    <div className="w-full bg-blue-400 rounded-md text-center text-white my-5 p-5">
        Processability & Release Profile
      
        <Separator colour='white' size='3/4'/>
        <div className="flex flex-col md:flex-row space-x-5 space-y-5 md:space-y-0 justify-between">
          <div className={ columnStyles }>
            <div className={ releaseStyles }>
              Pellets
            </div>
            <Separator />
            <Image
              width={300}
              height={150} 
              alt='data'
              src={'https://www.pharmaexcipients.com/wp-content/uploads/2022/03/SEM-images-of-the-surface-of-NAP%E2%80%93PVP-VA-coated-pellets.png'}
            />
          </div>
          <div className={ columnStyles }>
            <div className={ releaseStyles }>
              PBS Release
            </div>
            <Separator />
            <Graph data={ releaseData.pbs } />
          </div>
          <div className={ columnStyles }>
            <div className={ releaseStyles }>
              FBS Release
            </div>
            <Separator />
            <Graph data={ releaseData.fbs } />
          </div>          
        </div>
        
    </div>
  )
}

export default Release