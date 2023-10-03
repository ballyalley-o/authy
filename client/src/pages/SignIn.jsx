import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { FormContainer } from '@components/Form'
import { Button } from '@components/Button'
// assets
import { toast } from 'react-toastify'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submitted')
    toast.success('Signed In')
  }
  return (
    <FormContainer>
      <h1 className='text-6xl my-6'>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' className='my-5 button-default' label='SIGN IN'>
          Sign In
        </Button>
        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link to='/register' className='link-default'>
              Register
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default SignIn
