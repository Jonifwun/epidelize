const inputStyles = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
const labelStyles = "block text-gray-700 text-sm font-bold mb-2"

const Input = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=true,
    placeholder
}) => {
  return (
    <div className="mb-4">
        <label className={ labelStyles } htmlFor={ labelFor }>
            { labelText }
        </label>
        <input 
            className={ inputStyles }
            id={ id }
            type={ type }
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ handleChange }
            required={ isRequired }
        />            
    </div>
  )
}

export default Input