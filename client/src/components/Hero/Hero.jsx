import { Container, Card } from 'react-bootstrap'
// constants
import { DESC } from '@constants'
// icons
import { AuthyIcon } from '@icons'

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-dark w-75'>
          <AuthyIcon className='text-8xl w-24 h-24' />
          <h1 className='text-center mb-4 text-8xl font-bold text-white italic'>
            Authy Doody
          </h1>
          <p className='text-center mb-4 DMSans font-light text-white'>
            {DESC}
          </p>
          <div className='d-flex'>
            <button
              //   variant='warning'
              href='/login'
              className='button-default'
            >
              SIGN IN
            </button>
            <button href='/register' className='button-secondary'>
              REGISTER
            </button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero
