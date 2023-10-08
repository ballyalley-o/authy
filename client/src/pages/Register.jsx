/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// @hooks
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '@slices/user'
import { setCredentials } from '@slices/auth'
// @components
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FormContainer, FormGroup } from '@components/Form'
import { Loader } from '@components/Default'
// @assets
import { toast } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords doesn't match")
    } else {
      try {
        const res = await register({ email, name, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        toast.success('Registration Successful')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }
  return (
    <FormContainer>
      <h1 className='text-6xl my-6'>Register</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup
          value={name}
          setValue={setName}
          type='name'
          label='Name'
          placeholder='Enter Name'
        />
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
          placeholder='Password'
        />
        <FormGroup
          value={confirmPassword}
          setValue={setConfirmPassword}
          type='password'
          label='Confirm Password'
          placeholder='Confirm Password'
        />

        <Button
          type='submit'
          className='my-5 button-default'
          variant='warning'
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : 'Register'}
        </Button>
        <Row className='py-3'>
          <Col>
            Already have an account? &nbsp;
            <Link to='/signin' className='link-default'>
              Sign In
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default Register
