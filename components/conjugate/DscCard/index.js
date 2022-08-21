import { Separator } from "@components/ui"
import Image from "next/image"

const DscCard = ({ conjugate }) => {
  return (
    <div className="p-8 h-full w-full bg-white shadow-xl border border-blue-400  overflow-hidden md:max-w-2xl">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            DSC
        </div>
        <Separator />
        <div className="flex flex-col h-full items-center relative">
          {conjugate.dsc?.[0] && <div className="m-5 ">
            <Image 
              alt='dsc'
              src={conjugate.dsc[0]}
              // layout='fill'
              height='300'
              width='400'
            />
          </div>}
            
          {!conjugate.dsc?.length && 
          <div className="flex flex-col items-center space-y-28 mt-auto">
            <p>No DSC data available</p>
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline`}>Upload DSC data</button>
          </div>
          }
        </div>
    </div>
  )
}

export default DscCard