import { Authentication, Layout } from '@components/ui'
import { signUpFields } from '@constants/formFields'
import Head from 'next/head'

const SignUp = () => {

  return (
    <Layout>
      <Head>
        <title>Sign Up</title>
      </Head>
      <section className="grid mb-5 mt-28 place-content-center">
          <Authentication type='Sign Up' authFields={ signUpFields }/>     
      </section>
    </Layout>
  )
}

export default SignUp