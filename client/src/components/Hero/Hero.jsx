import { Container, Card } from 'react-bootstrap'
//  hooks
// import { useNavigate } from 'react-router-dom'
// components
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from '@components/Button'
// constants
import { DESC } from '@constants'
// icons
import { AuthyIcon } from '@icons'

const Hero = () => {
  //   const navigate = useNavigate()

  //   const handleOnClick = (href) => {
  //     navigate(href)
  //   }
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
            <Button link='/login' label='SIGN IN' />
            <Button
              link='/register'
              label='REGISTER'
              className='button-secondary'
            />
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero
