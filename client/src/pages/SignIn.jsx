/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FormContainer } from '@components/Form'
import { Loader } from '@components/Default'
// import { Button } from '@components/Button'
// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useSigninMutation } from '@slices/user'
import { setCredentials } from '@slices/auth'
// assets
import { toast } from 'react-toastify'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signin, { isLoading, error }] = useSigninMutation()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await signin({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      toast.success('Signed In')
      console.log('signed in')
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
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
          />
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          disabled={isLoading}
          type='submit'
          variant='warning'
          className='mt-3'
        >
          {isLoading ? <Loader /> : 'Sign In'}
        </Button>
        {/* <Button type='submit' className='my-5 button-default' label='SIGN IN'>
          Sign In
        </Button> */}
        <Row className='py-3'>
          <Col>
            New Customer? &nbsp;
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
