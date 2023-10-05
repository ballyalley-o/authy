import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { FormContainer, FormGroup } from '@components/Form'
import { Button } from '@components/Button'
// assets
import { toast } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const registered = false

    console.log('submitted')
    if (registered) {
      toast.success('Registration Successful')
    } else {
      toast.error('Failed to Register')
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
          type='confirmPassword'
          label='confirmPassword'
          placeholder='confirmPassword'
        />

        <Button
          type='submit'
          className='my-5 button-default'
          label='REGISTER'
        />
        <Row className='py-3'>
          <Col>
            Already have an account? &nbsp;
            <Link to='/register' className='link-default'>
              Sign In
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default Register
