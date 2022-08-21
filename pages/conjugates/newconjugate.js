import { Form } from "@components/conjugate"
import { Layout } from "@components/ui"
import Head from "next/head"

const NewConjugate = () => {
    return (
        <Layout>
            <Head>
                <title>New Conjugate</title>
            </Head>
            <Form />
        </Layout>
    )
}

export default NewConjugate