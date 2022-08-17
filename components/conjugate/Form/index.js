import { useEffect, useState } from 'react'
import { addConjugateFields, conjugateTypeOptions, designerOptions } from '@constants/formFields'
import Image from 'next/image'
import { Loader, Separator } from '@components/ui'
import { useGetUser } from '@components/providers/userContext'
import { useRouter } from 'next/router'

const Form = () => {

    const router = useRouter()

    const { firebaseHooks: { uploadImage }, firestoreHooks: { addConjugate } } = useGetUser()

    const createState = () => {
        const inputs = {}
        addConjugateFields.forEach(field => {
            inputs[field.id] = field.id == 'keywords' ? [] : ''
            inputs[field.id]
        })    
        return {
            ...inputs,
            type: 'Heterodimer',
            designer: 'JD'
        }
    }

    const [details, setDetails] = useState(createState())
    const [image, setImage] = useState({
        blob: null,
        file: null
    })
    const [loading, setLoading] = useState(false)
    const [error, setError]  = useState(null)

    useEffect(() => {
        const fieldsPass = addConjugateFields.every(field => {
                if(field.isRequired){
                    return details[field.id] != ''
                } else return true
            })
        !fieldsPass ? setError ('Please fill out all required fields') : setError(null)
    }, [details])

    const handleImageUpload = async () => {
        if(image){
           const { error, downloadURL } = await uploadImage(image.file, 'structures')
           error && setError(error)
           return downloadURL
        }
    }

    const handleAddConjugate = async () => {
        setLoading(true)
        const downloadURL = await handleImageUpload()
        const { error } = await addConjugate({
            ...details,
            structure: downloadURL
        })
        setLoading(false)
        error ? setError(error) : router.push('/')
    }

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage({
                blob: URL.createObjectURL(e.target.files[0]),
                file: e.target.files[0]
            })
        }
    }

    const inputStyles = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

  return (
    <section className="mb-5 mt-28 place-content-center flex flex-row w-auto">
            <Image 
                    src='/99.jpg'
                    alt='bg'
                    width={200}
                    height={340}
                    objectFit='cover'
                    objectPosition='center'
                    className='w-full'
            />
            <div className="shadow-xl border border-blue-500 overflow-hidden grid grid-cols-1">            
                <form className="bg-white shadow-md p-8 grid grid-cols-1 gap-2 uppercase tracking-wide text-sm text-indigo-500 font-semibold overflow-hidden">
                    Add New Conjugate
                    <Separator size='full'/>
                    <h6 className='normal-case font-light'>* Required fields</h6>
                    <div className='grid grid-cols-4 gap-4 normal-case'>
                        {/* add in some required fields for upload */}
                    {
                        addConjugateFields.map(field => {
                            return (
                                <div className="mb-4" key={ field.id }>
                                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor={ field.labelFor }>
                                        { field.labelText }
                                        { field.isRequired && '*' }
                                        { field.id == 'dos' && ' - dd/mm/yy'}
                                    </label>
                                    <input 
                                        className={ details[field.id] != '' ? inputStyles + "border-2 border-green-500" : inputStyles }
                                        id={ field.id }
                                        type={ field.type }
                                        step='.01'
                                        placeholder={ field.placeholder }
                                        value={ details[field.id] }
                                        onChange={ e => {
                                            setDetails({
                                                ...details,
                                                [e.target.id]: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                            )
                        })                  
                    }
                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="conjugate-type">
                            Conjugate Type*
                        </label>
                        <select 
                            className='w-full py-2 px-3 border rounded shadow'
                            value={ details.conjugateType }
                            onChange={e => setDetails({
                                ...details,
                                conjugateType: e.target.value
                            })}
                        >
                            { conjugateTypeOptions.map(option => {
                                return <option key={ option.value } value={ option.value }>{ option.label }</option>
                            })}
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="conjugate-type">
                            Designer*
                        </label>
                        <select 
                            className='w-full py-2 px-3 border rounded shadow'
                            value={ details.conjugateType }
                            onChange={e => setDetails({
                                ...details,
                                designer: e.target.value
                            })}
                        >
                            { designerOptions.map(option => {
                                return <option key={ option.value } value={ option.value }>{ option.label }</option>
                            })}
                        </select>
                    </div>
                    { error && error }
                    </div>
                    <Separator size='full'/>   
                        <div className="mb-4 flex flex-row">
                            <div className='flex flex-col'>
                                <label className="block text-sm text-indigo-500 font-semibold mb-2" htmlFor="username">
                                    Structure Upload
                                </label>
                                <input 
                                    className={ image.file ? inputStyles + "border-2 border-green-500" : inputStyles }
                                    id='structures'
                                    type="file"
                                    onChange={ handleChange }
                                />
                            </div>
                            {
                                image.blob && 
                                <div className='w-1/6 relative ml-10'>
                                    <Image 
                                        src={ image.blob }
                                        alt='structure'
                                        layout='fill'
                                    />
                                </div>
                            }
                        </div>
                    <Separator size='full'/>            
                    <div className="flex items-center justify-center">
                        {
                        loading ? <Loader /> 
                        :
                        <button 
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${error && 'hover:cursor-not-allowed'} rounded focus:outline-none focus:shadow-outline`} type="button"
                            onClick={ handleAddConjugate }
                            disabled={ error }
                        >
                            Add Conjugate
                        </button>
                        }
                    </div>
                </form>
            </div>    
    </section>
  )
}

export default Form