import { Layout } from "@components/ui"
import Link from "next/link"
import { TbFaceIdError } from 'react-icons/tb'

const PageNotFound = () => {
    return <div className="">
        <Layout>
            <div className="flex flex-col justify-center items-center h-screen space-y-4">
                <TbFaceIdError color='red' size={50}/>
                <h1>Page Not Found</h1>
                <h3>Please check the URL and that you&apos;re trying to access the correct page</h3>
                <div className="text-blue-500">
                    <Link href='/'>Click here to return to Home</Link>
                </div>
            </div>
        </Layout>
    </div>
}

export default PageNotFound