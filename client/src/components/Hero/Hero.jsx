import { Container, Card } from 'react-bootstrap'
//  @hooks
// import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@slices/user'
import { useSelector } from 'react-redux'
// @components
import { Button } from '@components/Button'
import { Loader } from '@components/Default'
// @constants
import { DESC } from '@constants'
// @icons
import { AuthyIcon } from '@icons'

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [{ isLoading }] = useRegisterMutation()
  //   const navigate = useNavigate()

  //   const handleOnClick = (href) => {
  //     navigate(href)
  //   }
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center pt-10'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-dark w-75'>
          <AuthyIcon className='text-8xl w-24 h-24' />
          <h1 className='text-center mb-4 text-8xl font-bold text-white italic Merriweather'>
            Authy Doody
          </h1>
          <p className='text-center mb-4 font-light text-white my-20'>{DESC}</p>
          <div className='d-flex my-20'>
            <Button
              link='/signIn'
              label='Sign In'
              className={userInfo ? 'hidden' : ''}
            />
            <Button
              link='/register'
              label='Join now'
              className={userInfo ? 'hidden' : 'button-secondary'}
            >
              {!userInfo || !isLoading ? 'Join Us' : <Loader />}
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero
