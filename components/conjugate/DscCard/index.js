import { Separator } from "@components/ui"

const DscCard = ({ conjugate }) => {
  return (
    <div className="p-8 h-full w-full bg-white rounded-xl shadow-xl border border-blue-400  overflow-hidden md:max-w-2xl hover:scale-[1.01] transition duration-150">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            DSC
        </div>
        <Separator />
        DSC data goes here

        Add button to upload DSC data, popup like the filter one? Then scroll option for multiple uploads like IG
    </div>
  )
}

export default DscCard