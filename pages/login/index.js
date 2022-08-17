import { Authentication, Layout } from '@components/ui'
import { loginFields } from '@constants/formFields'

const Login = () => {

  return (
    <Layout >
        <section className="grid mb-5 mt-28 place-content-center">
            <Authentication type='Log In' authFields={ loginFields }/>     
        </section>
    </Layout>
  )
}

export default Login