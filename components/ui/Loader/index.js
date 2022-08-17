
const SIZES = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14'
}

const Loader = ({size = 'md'}) => {

  return (
    <>
        <div className={`sk-cube-grid ${SIZES[size]} `}>
            {
                Array.from({length: 9}).map((_, index) => {
                    return <div key={index} className={`sk-cube sk-cube${index + 1}`}/>
                })
            }
    </div>
    </>
  )
}

export default Loader