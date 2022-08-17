import Image from "next/image"
import Link from "next/link"
import FurtherDetails from "../FurtherDetails"

const baseDetailStyles = "mt-2 text-white"

const Card = ({conjugate, full}) => {

  return (    
        <div key={conjugate.id} className={`bg-blue-400 shadow-xl border border-blue-400  overflow-hidden md:max-w-2xl ${!full && 'hover:scale-[1.01]'} transition duration-150`}>
            <div className="flex flex-col md:flex-row">
            <div className="bg-white">
            <div className="next-image-wrapper my-20 z-0">
                <Image
                  className= 'next-image-wrapper'
                  // layout='responsive'
                  width='200'
                  height='100'
                  src={conjugate.structure}
                  alt={conjugate.names}
                />
            </div>
            </div>  
            <div className="p-8 flex-2 ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  { conjugate.keywords.toString().replace(/,/g, ', ') }
                </div>
                <Link href={`/conjugates/${conjugate.slug}`}>
                  <a className="block h-12 mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    { conjugate.names }
                  </a> 
                </Link>
                <p className={ baseDetailStyles }>
                 ClogP: { conjugate.ClogP }
                </p>
                <p className={ baseDetailStyles }>
                  Hydrolysable Bond: { conjugate.hydrolysableBond }
                </p>
                <p className={ baseDetailStyles }>
                  Conjugate Type: { conjugate.type }
                </p>
                <p className={ baseDetailStyles }>
                  M.p.: { conjugate.mp } ℃
                </p>
                <p className={ baseDetailStyles }>
                  Dry Tg: { conjugate.dryTg } ℃
                </p>
                <p className={ baseDetailStyles }>
                  Wet Tg: {conjugate.wetTg } ℃
                </p>
            </div>
            {
              full &&
              <FurtherDetails conjugate={ conjugate }/>
            }
            </div>
            
        </div>
  )
}

export default Card