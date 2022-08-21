const Toolbar = ({filterDisplay, setFilterDisplay, select, setSelect}) => {
  return (
    <div className="flex ml-auto">
        <p
            className="text-white bg-blue-500 hover:cursor-pointer text-sm rounded-md w-fit p-2 mt-28 mr-5"
            onClick={() => setSelect(!select)}
        >
            Select Conjugates { select ? <span>&#9650;</span> : <span>&#9660;</span> }
        </p>
        <p
            className="text-white bg-blue-500 hover:cursor-pointer text-sm rounded-md w-fit p-2 mt-28"
            onClick={() => setFilterDisplay(!filterDisplay)}
        >
            Filter Types { filterDisplay ? <span>&#9650;</span> : <span>&#9660;</span> }
        </p>
    </div>
  )
}

export default Toolbar