import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

export const useStorage = async (image, type) => {
    console.log(image.name)
    let error = null
    let downloadURL = null
    const storage = getStorage()
    const structureRef = ref(storage, `${type}/${image.name}`)
    console.log()
    try {
        const snapshot = await uploadBytes(structureRef, image)
        downloadURL = await getDownloadURL(snapshot.ref)
    } catch (e) {
        console.log(e)
        error = e
    }
    return {
        error,
        downloadURL
    }
}