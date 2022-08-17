
const Separator = ({colour = 'blue-700', size = 'full'}) => {
  return (
    <div className="flex my-3">
        <span className={`w-${size} p-0.2 bg-${colour} mx-auto rounded-md`} />
    </div>
  )
}

export default Separator
