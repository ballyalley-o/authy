/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FormContainer, FormGroup } from '@components/Form'
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
        <FormGroup
          value={email}
          setValue={setEmail}
          type='email'
          label='Email'
          placeholder='Email'
        />
        <FormGroup
          value={password}
          setValue={setPassword}
          type='password'
          label='Password'
          placeholder='Enter Password'
        />
        <Button
          disabled={isLoading}
          type='submit'
          variant='warning'
          className='my-10 button-default'
        >
          {isLoading ? <Loader /> : 'Sign In'}
        </Button>
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
