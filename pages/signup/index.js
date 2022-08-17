import { Authentication, Layout } from '@components/ui'
import { signUpFields } from '@constants/formFields'

const SignUp = () => {

  return (
    <Layout >
        <section className="grid mb-5 mt-28 place-content-center">
            <Authentication type='Sign Up' authFields={ signUpFields }/>     
        </section>
    </Layout>
  )
}

export default SignUp