import conjugates from './conjugates'

export const getAllConjugates = () => {
    return {
        conjugates,
        conjugateMap: conjugates.reduce((acc, conjugate, index) => {
            acc[conjugate.id] = conjugate
            acc[conjugate.id].index = index
            return acc
        }, {})
    }
}