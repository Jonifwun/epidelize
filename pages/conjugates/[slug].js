import { DscCard, Gate } from "@components/conjugate";
import Card from "@components/conjugate/Card";
import Release from "@components/conjugate/Release";
import { Layout } from "@components/ui";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@firebase/clientApp'



export default function Conjugate ({ conjugate }) {
    return (
        <Layout>
            <div className="mt-28">
                {
                    conjugate.gate && <Gate conjugate={ conjugate }/>
                }
                <div className="grid place-items-center my-5 grid-cols-1 gap-5 grid-col md:grid-cols-2">
                    <Card conjugate={ conjugate } full />
                    <DscCard conjugate={ conjugate }/>
                </div>
                {
                    conjugate.releaseData &&
                    <Release conjugate={ conjugate }/>
                }
            </div>
        </Layout>
    )
}

const getConjugates = async () => {
    let conjugates = []
    const querySnapshot = await getDocs(collection(db, "conjugates"))
    querySnapshot.docs.forEach(snapshot => {
        const data = JSON.parse(JSON.stringify(snapshot.data()))
        conjugates.push({...data, id: snapshot.id})
    })
    return {
        conjugates
    }
}

export async function getStaticPaths () {

    const { conjugates } = await getConjugates()

    return {
        paths: conjugates.map(conjugate => ({
            params: {
                slug: conjugate.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps ({params}) {

    const { conjugates } = await getConjugates()
    conjugates.forEach(con => {
        console.log(con.slug)
    })

    const conjugate = conjugates.filter(conjugate => conjugate.slug === params.slug)[0]

    return {
        props: {
            conjugate
        }
    }
}