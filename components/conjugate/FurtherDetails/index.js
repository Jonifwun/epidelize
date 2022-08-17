import { ConjugateDropdown, Separator } from "@components/ui"
import { FiSettings } from "react-icons/fi"
import { createRef, useState } from "react"
import { createPopper } from "@popperjs/core"
import { FaWindowClose } from "react-icons/fa"

const fullDetailStyles = 'mt-2 text-black'

const iconStyles = 'p-1 ml-auto rounded-md hover:cursor-pointer hover:scale-[1.2] transition duration-150'

const FurtherDetails = ({ conjugate }) => {

    const [showDropdown, setShowDropdown] = useState(false)
    const btnDropdownRef = createRef()
    const popoverDropdownRef = createRef()
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-start"
        });
        setShowDropdown(true);
      }
      const closeDropdownPopover = () => {
        setShowDropdown(false);
      };

  return (
    <div className="px-6 pb-6 pt-8 bg-white">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Further Details
        </div>
        <Separator />
        <p className={ fullDetailStyles }>
            Date of Synthesis: { conjugate.DOS }
        </p>
        <p className={ fullDetailStyles }>
            Designed by: { conjugate.designer }
        </p>
        <p className={ fullDetailStyles }>
            Description: { conjugate.description }
        </p>
        <p className={ fullDetailStyles }>
            Molecular Weight: { conjugate.mw } g/mol
        </p>
        <p className={ fullDetailStyles }>
            Chemical Formula: { 
                conjugate.formula.split(/(\d+)/)
                .map((s, i) => i % 2 ? <span className="sub">{s}</span> : s)
            }
        </p>
        <Separator />
        <div className="flex flex-row justify-center items-center italic ">
            <p className='font-light text-sm'>Want to update or remove?</p>
            {
            !showDropdown ?
                <FiSettings 
                    ref={ btnDropdownRef }
                    color='blue'
                    onClick={() => {
                        showDropdown 
                            ? closeDropdownPopover()
                            : openDropdownPopover()
                    }}            
                    className={ iconStyles }
                    size='1.5em'
                />
            :
                <FaWindowClose
                    ref={ btnDropdownRef }
                    color='blue'
                    onClick={() => {
                        showDropdown 
                            ? closeDropdownPopover()
                            : openDropdownPopover()
                    }}            
                    className={ iconStyles }
                    size='1.5em'
                />
            }
        </div>
            <ConjugateDropdown className="z-50" showDropdown={ showDropdown } popoverDropdownRef={ popoverDropdownRef } id={ conjugate.id } />
    </div>
  )
}

export default FurtherDetails